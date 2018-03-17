
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
      $("ul#contacts").append("<li class='contact'>" +"<p class='para' >"+'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</p>" + "<button class='btn del'>del</button>" + "</li>");
     
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
    //        $('#contacts').on('click', 'p', function (event) {
    //         $("#show-contact").show();
    //         $("#show-contact h2").text(event.target.newContact.firstName.val());
    //         $(".first-name").text(event.target.newContact.firstName.val());
    //         $(".last-name").text(event.target.newContact.lastName.val());
    //      alert();
    // });
    //=========================================================================================
    // works
    //=========================================================================================
    // $('li').click(function(e) {
    //   $('#contacts').on('click', 'li', function (e) {
    //   var txt = $(e.target).text();
    //   console.log(txt);
    // });
    //=========================================================================================

   $('#contacts').on('click', 'p', function (e) {
      var txt = $(e.target).newContact.firstName.val();
      // let txt2 = $(e.target.this.newContact.firstName);
      // var string1 = txt.join();
      // let newTxt = string1.slice(" ");

      // var txt = $(e.target).find(newContact.firstName).text();
      // var txt = $(e.target).text().filter(n => n === newContact.firstName);
      console.log(txt);
      // console.log(txt2);
      // console.log(string1);

      // $("#show-contact").show();
      // $("#show-contact h2").text(txt);

    });

    //=========================================================================================
    $('#contacts').on('click', '.del', function (event) {
            $(event.target).parent().remove()
      });

      //============================================================================================
      // $(".contact").last().click(function() {
      //   $("#show-contact").show();
      //   $("#show-contact h2").text(newContact.firstName);
      //   $(".first-name").text(newContact.firstName);
      //   $(".last-name").text(newContact.lastName);
      // });
      //============================================================================================
      $(".para").last().click(function() {
        alert();
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });


});