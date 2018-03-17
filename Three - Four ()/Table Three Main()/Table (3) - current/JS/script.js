class Contact{

    constructor(id, first, last, email, password, phone) {
        this.id = id || "WTF";
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
            return "F'airfax"
        }
        else if(cityIndex == 2){
            return "C'harlie"
        }
        else if(cityIndex == 3){
            return "Evereteze"
        }
        else if(cityIndex == 4){
            return "H'errera"
        }
        else if(cityIndex == 5){
            return "Guerriero"
        }
        else if(cityIndex == 6){
            return "I'mperio"
        }
        else if(cityIndex == 7){
            return "Levitan"
        }
        else {
            return "A'mato"
        }
    }

}

    function dontCoptThatFloppy(id, first, last, email, password, phone) {

        let proactiveBitch = ("<tr>"+
        "<td class='td-id'>"+ id +"</td>"+
        "<td class='f_Name'>"+first+"</td>"+
        "<td class='l_Name'>"+last+"</td>"+
        "<td class='e_mail'>"+email+"</td>"+
        "<td class='pass_in'>"+password+"</td>"+
        "<td class='phone_in'>"+phone+"</td>"+
        "<td class='td-three-Btn'><button class='save-Btn'>save</button>"+
        "<button class='edit-Btn'>edit</button><button class='del-Btn'>Broken</button></td>"+ 
        "<td class='td-del'><button class='del-row'>Del</button></td>"+
        "</tr>")

        return proactiveBitch;
    }

    $(document).ready(function(){
        let idCounter = 1;

        let a_contacts = [];
        // let Novels_a = [];
        // let Anthologies_a = [];
        // let students_a = [];

            $('#new-row-btn').click(function(){

                let newContact = new Contact(idCounter, $("#name-input").val(), $("#lastname-input").val(), $("#email-input").val(), $("#pass-input").val(), $("#phone-input").val());
                // let Novels_item = new Novels(idCounter, $("#name-input").val(), $("#lastname-input").val(), $("#email-input").val(), $("#pass-input").val(), $("#phone-input").val());
                // let Anthologies_item = new Anthologies(idCounter, $("#name-input").val(), $("#lastname-input").val(), $("#email-input").val(), $("#pass-input").val(), $("#phone-input").val());
            
                $("#my-table").append(dontCoptThatFloppy(idCounter, newContact.first, newContact.last, newContact.email, newContact.password, newContact.phone))

                a_contacts.push(newContact);
                // Novels_a.push(Novels_item);
                // Anthologies_a.push(Anthologies_item);
                // students_a.push(Anthologies_item);

            
                // $("#name-input").val("")
                // $("#lastname-input").val("")
                // $("#email-input").val("")
                // $("#pass-input").val("")
                // $("#phone-input").val("")
                idCounter++;

            });

            $(document).on('click', '.del-row', function (event) {
                // debugger;
                var $row = $(this).closest('tr');
                var idd = $row.find('.td-id').text();
               
                //================================================
                // a_contacts = a_contacts.filter(function( obj ) {
                //     return obj.id != idd;
                //   });
                // //================================================
                a_contacts = a_contacts.filter( obj => obj.id != idd);
                //================================================
                // a_contacts = $.grep(a_contacts, function(obj){ 
                //     return obj.id != idd; 
                // });
                //================================================
                // a_contacts = $.grep(a_contacts, obj => obj.id != idd)

                $(event.target).parent().parent().remove()

        
        });

        // find(x => x.b === 6)
            $(document).on('click', '.edit-Btn', function (event) {

                var $row = $(this).closest('tr');
                var idd = $row.find('.td-id').text();
                // a_contacts.find(x => x.id == idd).first = "aaaaaa"; // changes the name of this object to 'aaaaaa'
                // a_contacts.filter( obj => obj.id == idd).first = 'a';
            //    console.log(a_contacts.filter( obj => obj.id == idd));
//======================================================================
             
            //    console.log(a_contacts.find(x => x.id == idd)); 
//======================================================================
// we need this... to find the index of the object in the array               
//======================================================================
                let index;
               index = a_contacts.findIndex(x => x.id==idd);
            //    console.log(index);
               console.log(a_contacts[index].first);
//======================================================================
               
                    // let  $row = $(this).closest('tr');
                    // let  id = $row.find('.td-id').text();
                    // let  fName = a_contacts[id-1].first;
                    // let  lName = a_contacts[id-1].last;
                    // let  email = a_contacts[id-1].email;
                    // let  pass = a_contacts[id-1].password;
                    // let  phone = a_contacts[id-1].phone;
        
//==============================================================================

                    // let  $row = $(this).closest('tr');
                    // let  id = $row.find('.td-id').text();
                    // let  fName = $row.find('.f_Name').text();
                    // let  lName = $row.find('.l_Name').text();
                    // let  email = $row.find('.e_mail').text();
                    // let  pass = $row.find('.pass_in').text();
                    // let  phone = $row.find('.phone_in').text();

//==============================================================================
                // let my_input_f_Name = "<input class='in_f_name' type='text' value='"+fName+"'>"
                // let my_input_l_Name = "<input class='in_l_name' type='text' value='"+lName+"'>"
                // let my_input_e_mail = "<input class='in_e_mail' type='text' value='"+email+"'>"
                // let my_input_pass = "<input class='in_pass_in' type='text' value='"+pass+"'>"
                // let my_input_phone = "<input class='in_phone_in' type='text' value='"+phone+"'>"

                // let my_input_f_Name = $("<input>", {
                //     "class": "in_f_name",
                //     type: "text",
                //     value: fName
                // });
                // let my_input_l_Name = $("<input>", {
                //     "class": "in_l_name",
                //     type: "text",
                //     value: lName
                // });
                // let my_input_e_mail = $("<input>", {
                //     "class": "in_e_mail",
                //     type: "text",
                //     value: email
                // });
                // let my_input_pass = $("<input>", {
                //     "class": "in_pass_in",
                //     type: "text",
                //     value: pass
                // });
                // let my_input_phone = $("<input>", {
                //     "class": "in_phone_in",
                //     type: "text",
                //     value: phone
                // });

                // $row.find('.f_Name').html(my_input_f_Name)
                // $row.find('.l_Name').html(my_input_l_Name)
                // $row.find('.e_mail').html(my_input_e_mail)
                // $row.find('.pass_in').html(my_input_pass)
                // $row.find('.phone_in').html(my_input_phone)


                // let edit = $row.find('.edit-Btn')
                // let del_btn = $row.find('.del-Btn')
                // let save_btn = $row.find('.save-Btn')

                // edit.css('display','none');
                // del_btn.css('display','none');
                // save_btn.css('display','block');
            });


            $(document).on('click', '.save-Btn', function (event) {

               
                
                var $row = $(this).closest('tr');

                var id = $row.find('.td-id').text();

                a_contacts[id-1].first = $row.find('.in_f_name').val();
                a_contacts[id-1].last = $row.find('.in_l_name').val();
                a_contacts[id-1].email = $row.find('.in_e_mail').val();
                a_contacts[id-1].password = $row.find('.in_pass_in').val();
                a_contacts[id-1].phone = $row.find('.in_phone_in').val();

                
                $row.find('.f_Name').html( a_contacts[id-1].first);
                $row.find('.l_Name').html(a_contacts[id-1].last);
                $row.find('.e_mail').html(a_contacts[id-1].email);
                $row.find('.pass_in').html(a_contacts[id-1].password);
                $row.find('.phone_in').html(a_contacts[id-1].phone);

                
                let edit = $row.find('.edit-Btn')
                let del_btn = $row.find('.del-Btn')
                let save_btn = $row.find('.save-Btn')

                edit.css('display','inline');
                del_btn.css('display','inline');
                save_btn.css('display','none');

            });

        
            $(document).on('click', '#sup', function (event) {
                console.log(a_contacts);
                // console.log(Novels_a);
                // console.log(Anthologies_a);
                // $("input[name='radio_btn']").prop('checked', false);
                // $("input[name='radio_btn']").button("refresh");
                // $("input[name='radio_btn_v']").button("refresh");
            });
            $("input[name='radio_btn']").on('change',function(event){
                if($('#r1').is(':checked')){

                    $('#test_div').css("background-color", "red");
                }
                // else if($('#r2').is(':checked')){
                //     $('#test_div').css("background-color", "blue");
                // }
                else{
                    $('#test_div').css("background-color", "green");
                }

            });

            // $(document).on('change', "input[name='radio_btn_v']", function (event) {
                $("input[name='radio_btn_v']:radio").change(function(){
                if($(this).val() == '1')
                {
                    $('#test_div').css("background-color", "orange");
                }
                else if($(this).val() == '2')
                {
                    $('#test_div').css("background-color", "black");
                }
                else if($(this).val() == '3')
                {
                    $('#test_div').css("background-color", "purple");
                }
                else{
                    $('#test_div').css("background-color", "red");
                }
            });

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
                    $("#my-table").append(dontCoptThatFloppy(a_contacts[i].id, a_contacts[i].first, a_contacts[i].last, a_contacts[i].email, a_contacts[i].password, a_contacts[i].phone))
                    }
            });
    });
