class Contact{

    constructor(id, first, last, email, password, phone) {
        // this.id = id;
        this.id = id || "WTF";
        // this.id = id || Math.floor(Math.random() * Math.floor(90000));
        this.first = first || this.get_Random_F_name();
        this.last = last || this.get_Random_F_name();
        this.email = email || (this.get_Random_F_name() + "@hotmail.com");
        this.password = password || Math.floor(Math.random() * Math.floor(90000));
        this.phone = phone || Math.floor(Math.random() * Math.floor(500));
    }
    get_Random_F_name(){
		let cityIndex = Math.floor(Math.random() * Math.floor(9));
		if(cityIndex == 0){
			return "O'mara"
		}
		else if(cityIndex == 1){
			return "Fairfax"
		}
		else if(cityIndex == 2){
			return "Charlie"
        }
        else if(cityIndex == 3){
			return "Evereteze"
        }
        else if(cityIndex == 4){
			return "Herrera"
        }
        else if(cityIndex == 5){
			return "Guerriero"
        }
        else if(cityIndex == 6){
			return "Imperio"
        }
        else if(cityIndex == 7){
			return "Levitan"
		}
		else {
			return "Amato"
        }
    }
  
}

function makeNewRow(id, first, last, email, password, phone) {

    let proactiveBitch = ("<tr><td class='td-id'>"+ id +
    "</td><td class='f_Name'>"+(first)+
    "</td><td class='l_Name'>"+(last)+
    "</td><td class='e_mail'>"+(email)+
    "</td><td class='pass_in'>"+(password)+
    "</td><td class='phone_in'>"+(phone)+
     "</td><td class='td-three-Btn'><button class='save-Btn'>save</button>"+
     "<button class='edit-Btn'>edit</button><button class='del-Btn'>del</button></td>"+ 
     "<td class='td-del'><button class='del-row'>Del</button></td>"+"</tr>")

    $("#my-table").append(proactiveBitch)
}

function dontCoptThatFloppy(id, first, last, email, password, phone) {

    let proactiveBitch = ("<tr><td class='td-id'>"+ id +
    "</td><td class='f_Name'>"+first+
    "</td><td class='l_Name'>"+last+
    "</td><td class='e_mail'>"+email+
    "</td><td class='pass_in'>"+password+
    "</td><td class='phone_in'>"+phone+
     "</td><td class='td-three-Btn'><button class='save-Btn'>save</button>"+
     "<button class='edit-Btn'>edit</button><button class='del-Btn'>del</button></td>"+ 
     "<td class='td-del'><button class='del-row'>Del</button></td>"+"</tr>")

     return proactiveBitch;
}

$(document).ready(function(){
let idCounter = 1;

let a_contacts = [];
let a_contacts2 = [];
let a_contacts3 = [];
let contacts_arr_obj = [];
let new_contacts_arr_obj = contacts_arr_obj;
    $('#new-row-btn').click(function(){

        let newContact = new Contact(idCounter, $("#name-input").val(), $("#lastname-input").val(), $("#email-input").val(), $("#pass-input").val(), $("#phone-input").val());
     

        $("#my-table").append(dontCoptThatFloppy(idCounter, newContact.first, newContact.last, newContact.email, newContact.password, newContact.phone))

         a_contacts.push(newContact);
       

        $("#name-input").val("")
        $("#lastname-input").val("")
        $("#email-input").val("")
        $("#pass-input").val("")
        $("#phone-input").val("")
        idCounter++;

    });

    $(document).on('click', '.del-row', function (event) {
        $(event.target).parent().parent().remove()
  
  });
//==================================================================================
// the edit button 1-rst version
//==================================================================================
 /**/  
    $(document).on('click', '.del-Btn', function (event) {
     

        var $row = $(this).closest('tr');
        var id = $row.find('.td-id').text();
        var fName = a_contacts[id-1].first;
        var lName = $row.find('.l_Name').text();
        var email = $row.find('.e_mail').text();
        var pass = $row.find('.pass_in').text();
        var phone = $row.find('.phone_in').text();
 

        let my_input_f_Name = "<input class='in_f_name' type='text' value='"+fName+"'>"
        let my_input_l_Name = "<input class='in_l_name' type='text' value='"+lName+"'>"
        let my_input_e_mail = "<input class='in_e_mail' type='text' value='"+email+"'>"
        let my_input_pass = "<input class='in_pass_in' type='text' value='"+pass+"'>"
        let my_input_phone = "<input class='in_phone_in' type='text' value='"+phone+"'>"

//======================================================================================
        $row.find('.f_Name').html(my_input_f_Name)
        $row.find('.l_Name').html(my_input_l_Name)
        $row.find('.e_mail').html(my_input_e_mail)
        $row.find('.pass_in').html(my_input_pass)
        $row.find('.phone_in').html(my_input_phone)

//======================================================================================
        // let choose_your_poison = "<td class='td-id'>"+ id +"</td><td class='f_Name'>"+
        // "<input class='in_f_name' type='text' value='"+fName+"'>"+
        // "</td><td class='l_Name'>"+"<input class='in_l_name' type='text' value='"+lName+"'>"+
        // "</td><td class='e_mail'>"+"<input class='in_e_mail' type='text' value='"+email+"'>"+
        // "</td><td class='pass_in'>"+"<input class='in_pass_in' type='text' value='"+pass+"'>"+
        // "</td><td class='phone_in'>"+"<input class='in_phone_in' type='text' value='"+phone+"'>"+
        //  "</td><td class='td-three-Btn'><button id='saveBtn"+idCounter+
        //  "' class='save-Btn'>save</button><button id='editBtn"+idCounter+
        //  "' class='edit-Btn'>edit</button><button id='delBtn"+idCounter+
        //  "' class='del-Btn'>del</button></td>"+ 
        //  "<td class='td-del'><button class='del-row'>Del</button></td>"

        //  $(this).closest('tr').html(choose_your_poison);


        let edit = $row.find('.edit-Btn')
        let del_btn = $row.find('.del-Btn')
        let save_btn = $row.find('.save-Btn')

        edit.css('display','none');
        del_btn.css('display','none');
        save_btn.css('display','block');
    });
//========================================================================

    $(document).on('click', '.save-Btn', function (event) {

        var $row = $(this).closest('tr');

        var f_Name = $row.find('.in_f_name').val();
        var l_Name = $row.find('.in_l_name').val();
        var e_Mail = $row.find('.in_e_mail').val();
        var pass_W = $row.find('.in_pass_in').val();
        var phone_N = $row.find('.in_phone_in').val();

        
        $row.find('.f_Name').html(f_Name);
        $row.find('.l_Name').html(l_Name);
        $row.find('.e_mail').html(e_Mail);
        $row.find('.pass_in').html(pass_W);
        $row.find('.phone_in').html(phone_N);


        // var fName = $row.find('.f_Name').text();
        // var lName = $row.find('.l_Name').text();
        // var email = $row.find('.e_mail').text();
        // var pass = $row.find('.pass_in').text();
        // var phone = $row.find('.phone_in').text();

        
        let edit = $row.find('.edit-Btn')
        let del_btn = $row.find('.del-Btn')
        let save_btn = $row.find('.save-Btn')

        edit.css('display','inline');
        del_btn.css('display','inline');
        save_btn.css('display','none');

    });

//===================================================================
   
    $(document).on('click', '#sup', function (event) {
      
        console.log(a_contacts);

    });

 
//===================================================================
// Start new sorting
//===================================================================
    $("#sort").on("change", function(event){

        let pickedValue = event.target.value;
        let table = $('#my-table')
        let rows = table.find('.td-id').toArray()
    

            if (pickedValue === "1"){
                a_contacts.sort(function(a, b){
                    return a.id - b.id;
                });
            }
            else if (pickedValue === "2"){
                a_contacts.sort(function(a,b) {
                    return a.first.localeCompare(b.first);
                });
            }
            else if (pickedValue === "3"){
                a_contacts.sort(function(a,b) {
                    return a.last.localeCompare(b.last);
                });
            }
            else if (pickedValue === "4"){
                a_contacts.sort(function(a,b) {
                    return a.email.localeCompare(b.email);
                });
            }
            else if (pickedValue === "5"){
                a_contacts.sort(function(a, b){
                    return a.password - b.password;
                });
            }
            else if (pickedValue === "6"){
                a_contacts.sort(function(a, b){
                    return a.phone - b.phone;
                });
            }
            else{}


            $(tbody).html("");
        
            for (var i = 0; i < rows.length; i++){
            makeNewRow(a_contacts[i].id, a_contacts[i].first, a_contacts[i].last, a_contacts[i].email, a_contacts[i].password, a_contacts[i].phone)
            }
        
    }); // End of sort 

});
