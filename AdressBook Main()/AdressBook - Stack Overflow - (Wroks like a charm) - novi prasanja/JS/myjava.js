
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
      $("ul#contacts").append("<li class='contact'>" +"<p class='para' >"+'First Name: '+ "<span class='f_name'>"+newContact.firstName +"</span>"+ ' Last Name: '+ "<span class='l_name'>"+newContact.lastName +"</span>" + "</p>" + "<button class='btn del'>del</button>" + "</li>");
      // $("ul#contacts").append("<li class='contact'>" +"<p class='para' >"+'First Name: '+ newContact.firstName + ' Last Name: '+ newContact.lastName + "</p>" + "<button class='btn del'>del</button>" + "</li>");
     
      a_contacts.push(newContact);
      
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });


        
    $('#contacts').on('click', 'p', function (e) {
      var txt = $(e.target).text();
      console.log(txt);
     //==========================================================
     var $row = $(this).closest('p');
        var fName = $row.find('.f_name').text();
        var lName = $row.find('.l_name').text();
      
        $("#show-contact").show();
        $("#show-contact h2").text(fName);
        $(".first-name").text(fName);
        $(".last-name").text(lName);
     

    });

    $('#contacts').on('click', '.del', function (event) {
            $(event.target).parent().remove()
      });
    
});