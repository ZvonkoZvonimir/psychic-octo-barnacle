//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// user interface logic
$(document).ready(function() {
  // event.preventDefault();
  let index = 0;
  let a_contacts = [];

    // var inputtedFirstName = $("input#new-first-name").val();
    // var inputtedLastName = $("input#new-last-name").val();

    // var newContact = new Contact(inputtedFirstName, inputtedLastName);

    // $("ul#contacts").append("<li><span class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</span></li>");
    

    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    // });

 

    $("#addBtn").click(function(){
      event.preventDefault()
      // alert(a_contacts);
      console.log(a_contacts);
      $("li").remove();
    });

    $("#save").click(function(){
      event.preventDefault()

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      // alert(inputtedFirstName);
      
      // $("body").append('<p>I\'m a paragraph!</p>');
      $("ul#contacts").append("<li class='contact'>11</li>");
      // $("ul#contacts").append("<li class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</li>");
      // $("ul#contacts").append("<li id='li"+(index)+"'><span class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</span></li>"+"<button id='del"+(index)+"' class='btn'>del</button>");
      a_contacts.push(newContact);

      index++
      //---------------------------------------------------------------
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });

    // $("del"+(index)).click(function(){
    //   alert();
    // });
    $('#del'+(index)).click(function(){
      alert();
      // $(e.target).remove();
  });


  // $("ul#contacts").click(function() { $(this).parent().remove(); });
  $("ul#contacts .contact").click(function() { $(this).parent().remove(); });

  // $('div .minibox').click(function(e){
  // $('li').click(function(e){
  //   $(e.target).remove();
// });


});