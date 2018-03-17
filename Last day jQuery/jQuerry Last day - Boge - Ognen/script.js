$(document).ready(function(){

let email_validation = false;
let pass_validation = false;

    $("#next").click(function(){
      
        let current_element = $(".active");
        let next_element = current_element.next();

        if(next_element.is("div") === true && email_validation == true && pass_validation == true )
        {
        current_element.removeClass("active");
        next_element.addClass("active");
        }

       });

    $('#prev').click(function(){

        let current_element = $(".active");
        let prev_element = current_element.prev();

        if(prev_element.is("div") === true)
        {
        current_element.removeClass("active");
        prev_element.addClass("active");
        }
    });

    $('#email').on("input", function(){

        if(this.value.includes("@")){
            $(this).css("border","4px solid limegreen");
            email_validation = true;
        }
        else
        {
            $(this).css("border","4px solid red");
        }

    })

    $('#pass').on("input", function(){

        if(this.value.length > 10){
            $(this).css("border","4px solid limegreen");
            pass_validation = true;
        }
        else
        {
            $(this).css("border","4px solid red");
        }
       
    })

});

















   

