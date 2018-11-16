$(document).ready(function () {

	var cart = new shopping_cart("jadrn026");
	var cartLength = cart.getCartArray();
                for(i=0; i < cartLength.length; i++) {
                  var sku = cartLength[i][0];
                  var quant = cartLength[i][1];
                    $.ajax({
                        url:"http://jadran.sdsu.edu/jadrn026/servlets/servlet/ConfirmationOfOrder?sku=" + sku+ "&quant="+quant, 
                        success: function(response){
                        },
                        error: function(response) {
                            
                        }
                        
                    });
        }

        document.cookie = "jadrn026=; expires=Mon, 09 Jan 1980 00:00:00 UTC; path=/;";
});