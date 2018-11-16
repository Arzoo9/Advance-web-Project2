var InnerFilterSearch = [];
var Filtersearch = [];

$(document).ready(function () {

	Item_bucket = new Array();
	cart = new shopping_cart("jadrn026");

	$.ajax({
		url:"http://jadran.sdsu.edu/jadrn026/servlets/servlet/Fatch_Data", 
		success: function(response){		
		storeData(response);
		DisplayItems();
    		},
		error: function(response) {
               		alert(response+"There is problem to fetch data.");
                }
	});
	$('#filters input:checkbox').on('click',function(){
			if($(this).is(':checked')){
				Filtersearch.push($(this).val());
				displayFilteredProducts();
			}else{
				const index = Filtersearch.indexOf($(this).val());
				Filtersearch.splice(index, 1);
				displayFilteredProducts();
			}

			if((InnerFilterSearch == null || InnerFilterSearch == '' || InnerFilterSearch == undefined) && (Filtersearch == null || Filtersearch == '' || Filtersearch == undefined)){
				DisplayItems();
			}
			
		});

	$('#Items').on('click', "input[type=button]", function(e) {

	 	if($(e.target).val() != 'Add to cart') return;
	 	cart.add($(e.target).attr("name"),1);
	 	$(e.target).next().fadeIn(50).fadeOut(2000);
	 	$("#ItemCount").html(cart.size());

    });
    $('#Details').on('click', "input[type=button]", function(e) {

	 	if($(e.target).val() != 'Add to cart') return;
	 	cart.add($(e.target).attr("name"),1);
	 	// document.getElementById('CartSize').innerHTML = cart.size();
	 	$(e.target).next().fadeIn(50).fadeOut(2000);
	 	$("#ItemCount").html(cart.size());

    });
    $('#searchicon').on('click', function(e) {
    	e.preventDefault();
    	var tempword = $("#searchtext").val();
    	RelatedItemsToSearchtempword(tempword);
    });

    $('#Items').on('click', "table" ,function(e) {
	 	if(e.target.nodeName == "IMG"){
	 		 ProductsDescription(e.target.id);
	 		 modal.style.display = "block";
	 	}else{
	 		return;
	 	}
	 });

	
    // Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
	$("#ItemCount").html(cart.size());

	$('#all').on('click', function() {
		DisplayItems();
	});

	$('#Honda').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Honda") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Volkswagen').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Volskwagen") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Hyundai').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Hyundai") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Audi').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Audi") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#BMW').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "BMW") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Mercedes-benz').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Mercedes-Benz") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Chevrolet').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Chevrolet") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
	$('#Nissan').on('click', function() {
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][1] == "Nissan") {
          			temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 

            	}
           }$("#Items").html(temp);
	});
});	
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
   $("#mymodal").css("display", "none");
   }
});

function DisplayItems(){
        temp = "";
       
        for(var i=0; i < Item_bucket.length-1; i++) {
            {

				temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 
            }
        }
         $("#Items").html(temp);
       
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
	function ProductsDescription(sku){
		temp = "";
		for(var i=0; i < Item_bucket.length; i++) {
            if(Item_bucket[i][0] == sku){
            	temp += "<table class=\"Items_DisplayModal\" cellpadding='5px' border='0'>";
            	temp += "<tr><td colspan='2' class='VendoridModal'>"+ Item_bucket[i][1] + "</td><td rowspan='5' class='Tableimage'><img src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='400'/></td></tr>";
         
				temp += "<tr><td colspan='2' class='PriceModal'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='LabelModal'>Description</td><td class='PriceModal'>"+ Item_bucket[i][5] +"</td></tr>";
            	temp += "<tr><td class='LabelModal'>Features</td><td  class='PriceModal'>"+ Item_bucket[i][7] +"</td></tr><tr><td class='PriceModal'>$ "+ Item_bucket[i][6] +"</td></tr>";
				
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td colspan='2'><input type='button' name="+Item_bucket[i][0]+" value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td colspan='2'><div class='Notavailable'>Coming soon...</div></tr>";
				}else{
					temp += "<tr><td colspan='2'><input type='button' name="+Item_bucket[i][0]+" value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td colspan='2'><div class='Instoke'>In stock</div></tr>";
				 }
				
				temp += "</table>";  
	
            }
        }
        $("#Details").html(temp);
        
}
$(document).keyup(function(e) {
  if (e.keyCode === 27)  $(".modal").css("display", "none");  
});

function RelatedItemsToSearchtempword(tempword){

	tempword = tempword.toUpperCase();
	var temp = " ";
    for(var i=0; i < Item_bucket.length-1; i++) {    	

    		if(  (Item_bucket[i][1].toUpperCase()).includes(tempword) || (Item_bucket[i][2].toUpperCase()).includes(tempword) || (Item_bucket[i][3].toUpperCase()).includes(tempword) || (Item_bucket[i][5].toUpperCase()).includes(tempword) || (Item_bucket[i][7].toUpperCase()).includes(tempword)){
            	
            	temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 	
            }
        }
        if(temp == " ") {
        	temp += "<div id='EmptyCart'><h1>Nothing related to this word!</h1><br>"+
                "<a href='proj2.html'><button type='submit' value='Submit' class='BuyHere'>See All!</button></a>";
        }
        $("#Items").html(temp);
        
	}


function displayFilteredProducts(){
		
		checkCat = false;
		temp = "";
		if(document.getElementById('Items') != null)
		document.getElementById('Items').innerHTML = "";

	if(Filtersearch.length != 0) {
		checkCat = true;
	}
	

		for(var l = 0; l<Filtersearch.length; l++){
					for(var i=0; i < Item_bucket.length; i++) {
			    	
			    		if((Item_bucket[i][2] != undefined ? Item_bucket[i][2].toUpperCase() : Item_bucket[i][2]) == (Filtersearch[l] != undefined ? Filtersearch[l].toUpperCase() : Filtersearch[l])){
				        	
				temp += "<table class=\"Items_Display\" cellpadding='5%' border='0'>";
				temp += "<tr><td class='Vendorid'>"+ Item_bucket[i][1] + "</td></tr> <tr><td class='Tableimage'><img id='"+Item_bucket[i][0]+"' src=\"http://jadran.sdsu.edu/~jadrn026/proj1/Product_Image/"+Item_bucket[i][0]+".jpg\" alt='Photo' width='250'/></td></tr>";
				temp += "<tr><td class='Price'>"+ Item_bucket[i][3] +"</td></tr><tr><td class='Price'>$ "+ Item_bucket[i][6] +"</td></tr>";
				if(Item_bucket[i][4] <= 0){
				temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' disabled /><span>Added to cart</span></td></tr>";
				temp += "<tr><td><div class='Notavailable'>Coming soon...</div>";
				}else{
					temp += "<tr><td><input type='button' name='"+Item_bucket[i][0]+"' value='Add to cart' id='Addtocart' /><span>Added to cart</span></td></tr>";
					temp += "<tr><td><div class='Instoke'>In stock</div>";
				 }
				
				temp += "</table>"; 
            }
			    		// }
			}		
				}

    if(document.getElementById('Items') != null) {   	
    	document.getElementById('Items').innerHTML = temp;
	}
}