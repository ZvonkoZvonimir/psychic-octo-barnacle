$(document).ready(function(){
    var isEmailValid = false;
    var isPasswordValid = false;
    var isMaticenValiden = false;
    var isPhoneNumberValid = false;
    var isAddressValid = false;
    var isAddressNumValid = false;
    $("#email").change(function(){
        if(!this.value.includes("@")){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isEmailValid = true;
        }
        
    });

    $("#password").change(function(){
        if(this.value.length < 10){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isPasswordValid = true;
            
        }
        
    });

    $("#maticen").focusout(function(){
        var number = parseInt(this.value);

        if(this.value.length < 12 || this.value.length > 12  || isNaN(number)){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isMaticenValiden = true;
        }
    });

    $("#telefon").on("input", function(){
            if(this.value.length === 4){
                $(this).val(this.value + "-");
            }
        var numberArray = this.value.split("-");
        var firstNumber = parseInt(numberArray[0]);
        var secondNumber = parseInt(numberArray[1]);

        if(numberArray.length != 2 || this.value.length != 8  || isNaN(firstNumber) || isNaN(secondNumber)){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isPhoneNumberValid = true;
        }

    });
    $("#adresa").focusout(function(){
        if(this.value.length == 0){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isAddressValid = true;
        }
    });

    $("#adresaBr").focusout(function(){
        if(this.value.length == 0){
            $(this).css("border","1px solid red");
        }
        else{
            $(this).css("border","1px solid black");
            isAddressNumValid = true;
        }
    });
    $("#next").click(function(){

        var currentElement = $(".active");
        var nextElement = currentElement.next();
        var idCurrentElement = currentElement.attr("id");
        var isValid = validateAndSetLocalStorage(idCurrentElement);
        if(nextElement.attr("id") === "three"){
            showInfo();
        }
        if(nextElement.is("div") === true){
            if(isValid){
            currentElement.removeClass("active");
            nextElement.addClass("active");
            }
        }
    });

    $("#prev").click(function(){
        var currentElement = $(".active");
        var prevElement = currentElement.prev();
        if(prevElement.is("div") === true){

        currentElement.removeClass("active");
        prevElement.addClass("active");
        }
    });

    function validateAndSetLocalStorage(id){
        var isValid = false;
        switch(id){
            case "one":
                isValid = isEmailValid && isPasswordValid;

                if(isValid){
                    localStorage.setItem("email",$("#email").val());
                    localStorage.setItem("password",$("#password").val());
                }
            break;
            case "two":
                isValid = isMaticenValiden && isPhoneNumberValid && isAddressValid && isAddressNumValid;
                if(isValid){
                    localStorage.setItem("maticen",$("#maticen").val());
                    localStorage.setItem("telefon",$("#telefon").val());
                    localStorage.setItem("adresa",$("#adresa").val());
                    localStorage.setItem("adresaBr",$("#adresaBr").val());
                }
            break;
            default:
            break;

        }

        return isValid;
       
    }

    function showInfo(){
        $("#email_val").text(localStorage.getItem("email"));
        $("#password_val").text(localStorage.getItem("password"));
        $("#embg_val").text(localStorage.getItem("maticen"));
        $("#phone_val").text(localStorage.getItem("telefon"));
        $("#address_val").text(localStorage.getItem("adresa"));
        $("#addressNum_val").text(localStorage.getItem("adresaBr"));
    }
});