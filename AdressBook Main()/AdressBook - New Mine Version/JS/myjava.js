//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// user interface logic
$(document).ready(function() {
  // event.preventDefault();
  
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    // $("ul#contacts").append("<li><span class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</span></li>");
    

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $("#save").click(function(){
      event.preventDefault()
      $("body").append('<p>I\'m a paragraph!</p>');
      $("ul#contacts").append("<li><span class='contact'>" +'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</span></li>");
    });

});