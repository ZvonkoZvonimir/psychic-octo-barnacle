$(document).ready(function(){
    var isEmailValid = false;
    var isPasswordValid = false;
    $("#next").click(function(){

        var currentElement = $(".active");
        var nextElement = currentElement.next();
        if(nextElement.is("div") === true){
            if(isEmailValid == true && isPasswordValid == true){
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


});