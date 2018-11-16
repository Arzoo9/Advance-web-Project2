
var Item_bucket;

$(document).ready(function () {
	 var cart = new shopping_cart("jadrn026");
	 Item_bucket = new Array();

	$.ajax({
		url:"http://jadran.sdsu.edu/jadrn026/servlets/servlet/Fatch_Data", 
		success: function(response){			
		storeData(response);		
		ProductsInCart();
			},
		error: function(response) {
               		alert("Can't able to fetch data from database please refresh page."); 
                }
	});
	//reference Stack overflow
	$('#Items').on('keydown',$('input[type="text"]'), function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)  && (e.which < 96 || e.which > 105) ) {
            e.preventDefault();
            return false;
        }
    });

     $('#Items').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Remove'){return}; 
        var sku = $(e.target).attr("name");
        cart.delete(sku);
        ProductsInCart();
     });

	$('#Items').on('focusout',$('input[type="text"]'), function(e) {

        if($(e.target).val() == 'Remove') {
            return;
        }
        if($(e.target).val() == 'Update cart') {
            return;
        }
        	for(var i=0; i < Item_bucket.length-1; i++) {
            if(Item_bucket[i][0] == $(e.target).attr("name")){
                if(parseInt(Item_bucket[i][4]) > parseInt($(e.target).val()) ){
                    cart.setQuantity($(e.target).attr("name"),$(e.target).val());
                }else{
                    alert("We do not have this much Quantity!");
                }
            }
        }
        ProductsInCart();
        
        
      
    });

	// if(cart.size() > 0){
 //    	$("#CartDetails").show();
 //    	//$("#EmptyCarts").hide();
 //    }

	function ProductsInCart(){
		var cartLength = cart.getCartArray();
		if(cart.size() == 0){
			$("#CartDetails").css("display","none");
			$("#EmptyCart").css("display","block");
		}   
		var temp = "";
		var totalamount = 0;
		for(var i=0; i < cartLength.length; i++) {
            for(var j=0; j < Item_bucket.length-1; j++) {
                if(Item_bucket[j][0] == cartLength[i][0]){
                    if(parseInt(cartLength[i][1]) >= parseInt(Item_bucket[j][4])){
                        cart.setQuantity(cartLength[i][0],Item_bucket[j][4]);
                        cartLength = cart.getCartArray();
                    }
                }
           }
        }
		for (var i=0; i< cartLength.length; i++) {
			for (var j = 0; j < Item_bucket.length; j++) {

				if (Item_bucket[j][0] == cartLength[i][0]) {

						temp += "<table class=\"Items_Display\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ Item_bucket[i][1] + "</td></tr>";

    	  	  			temp += "<tr><td rowspan=\"4\" width=\"60%\"><center><img src=\"/~jadrn026/proj1/Product_Image/"+ Item_bucket[j][0]+".jpg\" alt=\""+Item_bucket[j][2]+"\""+ " width=\"70%\"  /></center></td><td>$"+ Item_bucket[j][6] +" </td></tr>";

    	  	  			temp += "<tr><td class=\"button\"><input type='text' value='"+ cartLength[i][1] + "' name='"+ Item_bucket[j][0] + "'/></td></tr><tr><td class=\"button\"><input type='button' value='Update cart' name='"+ Item_bucket[j][0] + "' </td></tr>";

    	  	  			temp += "<tr><td class=\"button\"><input type='button' value='Remove' name='"+ Item_bucket[j][0] + "' /></td></tr>";

    				    temp += "<tr><td colspan=\"2\">"+ Item_bucket[j][3] + "</td></tr></table>";

    				    totalamount += cartLength[i][1]*Item_bucket[j][6];
				 }
			}
			
		}
		ShowCart(totalamount);
	 	$('#Items').html(temp);

	}

	function ShowCart(totalamount){
		if(totalamount == 0){
			var temp = "";
			temp += "<table>";
			temp += "<tr><td>Items</td><td>"+ cart.size() +"</td></tr><tr><td>Total</td><td>$"+ Math.floor(totalamount * 100) / 100  +" </td></tr>";
			temp += "<tr><td>Tax</td><td>$"+ Math.floor((0.0775*totalamount) * 100) / 100  +" </td></tr><tr><td>Shipping Charges</td><td>$5</td</tr>";
			temp += "<tr><td>Grand Total</td><td>$"+   Math.floor(((1.0775*(totalamount+5)) * 100))/ 100  + "</td></tr></table>";
			temp += "<a href='confirmOrder.html'><button type='submit' value='Submit' class='OrderNow' disabled>Order Now</button></a>";
			
		}else{
			var temp = "";
			temp += "<table>";
			temp += "<tr><td>Items</td><td>"+ cart.size() +"</td></tr><tr><td>Total</td><td>$"+ Math.floor(totalamount * 100) / 100  +" </td></tr>";
			temp += "<tr><td>Tax</td><td>$"+ Math.floor((0.0775*totalamount) * 100) / 100  +" </td></tr><tr><td>Shipping Charges</td><td>$5</td</tr>";
			temp += "<tr><td>Grand Total</td><td>$"+   Math.floor(((1.0775*(totalamount+5)) * 100))/ 100  + "</td></tr></table>";
			temp += "<a href='confirmOrder.html'><button type='submit' value='Submit' class='OrderNow'>Order Now</button></a>";
			$('#CartDetails').html(temp);
			$("#CartDetails").css("display","block");
		}
	}

	function storeData(response) {
    		var tarray = arrayC(response,'^');
		for(var i=0; i < tarray.length; i++) {
        		arrayz = arrayC(tarray[i],'~');
        		Item_bucket[i] = arrayz;
        	}	
	}

	function arrayC(item,delimiter) {
		
		tarray=new Array(1);
		var Count=0;
		var string=new String(item);

		while (string.indexOf(delimiter)>0) {
			tarray[Count]=string.substr(0,string.indexOf(delimiter));
			string=string.substr(string.indexOf(delimiter)+1,string.length-string.indexOf(delimiter)+1);
			Count=Count+1;
		}

		tarray[Count]=string;
		return tarray;
	}

        
 
   });