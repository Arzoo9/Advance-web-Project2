$(document).ready(function () {
    
    $("#bothsameaddress").change(function () {
        if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sfirsname]").val($("input[name=firstname]").val());
            $("input[name=slastname]").val($("input[name=lastname]").val());
            $("input[name=sA1]").val($("input[name=A1]").val());
            $("input[name=sA2]").val($("input[name=A2]").val());
            $("input[name=scity]").val($("input[name=city]").val());
            $("input[name=sstate]").val($("input[name=state]").val());
            $("input[name=szipcode]").val($("input[name=zipcode]").val());
            $("input[name=sphone]").val($("input[name=phone]").val());
        } else {
            $("input[name=sfirsname]").val(" ");
            $("input[name=slastname]").val(" ");
            $("input[name=sA1]").val(" ");
            $("input[name=sA2]").val(" ");
            $("input[name=scity]").val(" ");
            $("input[name=sstate]").val(" ");
            $("input[name=szipcode]").val(" ");
            $("input[name=sphone]").val(" ");
        }


    });
    $( "#firstname" ).keyup(function() {
        var Firstname = $("input[name=FName]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sfirsname]").val(Firstname.val());
       }
    });
    $( "#lastname" ).keyup(function() {
        var Lastname = $("input[name=lastname]");
       if ($("#bothsameaddress").is(':checked')) {
             $("input[name=slastname]").val(Lastname.val());
       }
    });
    $( "#A1" ).keyup(function() {
        var Address1 = $("input[name=A1]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sA1]").val(Address1.val());
       }
    });
    $( "#A2" ).keyup(function() {
        var Address2 = $("input[name=A2]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sA2]").val(Address2.val());
       }
    });
    $( "#city" ).keyup(function() {
        var City = $("input[name=city]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=scity]").val(City.val());
       }
    });
    $( "#state" ).keyup(function() {
        var State = $("input[name=state]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sstate]").val(State.val());
       }
    });
    $( "#zipcode" ).keyup(function() {
            var ZipCode = $("input[name=zipcode]");
       if ($("#bothsameaddress").is(':checked')) {
            $("input[name=szipcode]").val(ZipCode.val());
       }
    });
    $( "#phone" ).change(function() {
        var Phone = $("input[name=phone]");
        if ($("#bothsameaddress").is(':checked')) {
            $("input[name=sphone]").val(Phone.val());
       }
    });
   
});