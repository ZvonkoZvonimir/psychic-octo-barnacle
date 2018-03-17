
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}


$(document).ready(function() {
  let a_contacts = [];

    $("#delBtn").click(function(){
      $("li").remove();
    });

    $("#save").click(function(){
      event.preventDefault()

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      $("ul#contacts").append("<li class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "<button class='btn del'>del</button>" + "</li>");
     
      a_contacts.push(newContact);
      
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });


        //---------------------------------------------------------------

      

      // $("li").on('click', function() { 
      //   $(this).remove();
      //  });


      //   $('li').on('click', function(e){
      //     $(e.target).remove();
      // });


//---------------------------------------------------------------
      // // $(document).delegate('li', 'click', function(){
      // $(document).on('click', 'li', function(){
      //   $(this).remove();
      //   });



//---------------------------------------------------------------
      //This simple code should remove li items when clicked in the ul with id contacts.
    //     $('#contacts').on('click', 'li', function (event) {
    //       $(event.target).remove()
    // });

    //=========================================================================================
    $('#contacts').on('click', '.del', function (event) {
            $(event.target).parent().remove()
      });


});