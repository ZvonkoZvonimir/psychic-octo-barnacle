$(document).ready(function(){

    let idCounter = parseFloat(Math.random() * 100).toFixed(0)

        $('#new-row-btn').click(function(){

            $("#my-table").append("<tr><td class='td-id'>"+ idCounter+"</td><td class='f_Name'>"+$("#name-input").val()+
            "</td><td class='l_Name'>"+$("#lastname-input").val()+
            "</td><td class='e_mail'>"+$("#email-input").val()+
            "</td><td class='pass_in'>"+$("#pass-input").val()+
            "</td><td class='phone_in'>"+$("#phone-input").val()+
            "</td><td class='td-three-Btn'><button id='saveBtn"+idCounter+"' class='save-Btn'>save</button><button id='editBtn"+idCounter+"' class='edit-Btn'>edit</button><button id='delBtn"+idCounter+"' class='del-Btn'>del</button></td>"+ "<td class='td-del'><button class='del-row'>Del</button></td>"+ "</tr>")
            
            $("#name-input").val("")
            $("#lastname-input").val("")
            $("#email-input").val("")
            $("#pass-input").val("")
            $("#phone-input").val("")
            idCounter++;

                $("td:even").css( "background-color", "#a35635" );
                $("td:odd").css( "background-color", "#828e20" );


                idCounter = parseFloat(Math.random() * 100).toFixed(0)

        });

        $(document).on('click', '.del-row', function (event) {
            $(event.target).parent().parent().remove()
            $("td:even").css( "background-color", "#a35635" );
            $("td:odd").css( "background-color", "#828e20" );
    });

        $(document).on('click', '.edit-Btn', function (event) {
            var $row = $(this).closest('tr');
            var id = $row.find('.td-id').text();
            var fName = $row.find('.f_Name').text();
            var lName = $row.find('.l_Name').text();
            var email = $row.find('.e_mail').text();
            var pass = $row.find('.pass_in').text();
            var phone = $row.find('.phone_in').text();

            

            let choose_your_poison = "<td class='td-id'>"+ id +"</td><td class='f_Name'>"+"<input class='in_f_name' type='text' value='"+fName+"'>"+
            "</td><td class='l_Name'>"+"<input class='in_l_name' type='text' value='"+lName+"'>"+
            "</td><td class='e_mail'>"+"<input class='in_e_mail' type='text' value='"+email+"'>"+
            "</td><td class='pass_in'>"+"<input class='in_pass_in' type='text' value='"+pass+"'>"+
            "</td><td class='phone_in'>"+"<input class='in_phone_in' type='text' value='"+phone+"'>"+
            "</td><td class='td-three-Btn'><button id='saveBtn"+idCounter+"' class='save-Btn'>save</button><button id='editBtn"+idCounter+"' class='edit-Btn'>edit</button><button id='delBtn"+idCounter+"' class='del-Btn'>del</button></td>"+ "<td class='td-del'><button class='del-row'>Del</button></td>"

            $(this).closest('tr').html(choose_your_poison);

            $("td:even").css( "background-color", "#a35635" );
            $("td:odd").css( "background-color", "#828e20" );


            let edit = $row.find('.edit-Btn')
            let del_btn = $row.find('.del-Btn')
            let save_btn = $row.find('.save-Btn')

            edit.css('display','none');
            del_btn.css('display','none');
            save_btn.css('display','block');
        });


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

            
            let edit = $row.find('.edit-Btn')
            let del_btn = $row.find('.del-Btn')
            let save_btn = $row.find('.save-Btn')

            edit.css('display','inline');
            del_btn.css('display','inline');
            save_btn.css('display','none');

        });

    //===================================================================
    // Need Help
    //===================================================================


    $("#sort").on("change", function(event){
            var pickedValue = event.target.value;

            switch(pickedValue){
                case '1': //sort by index
                sortTable = (function(a, b){
                    var asc  = order === 'asc',
                    tbody = table.find('tbody');
            
                tbody.find('tr').sort(function(a, b) {
                    if (asc) {
                        return  (parseInt($('tr:first', a).text()) - parseInt($('tr:first', b).text()));
                    
                    }
                    else 
                    {
                        return (parseInt($('tr:first', b).text()) - parseInt($('tr:first', a).text()));
                    }
                }).appendTo(tbody);
                
                })
                    break;
                case '2': // sort by first name
                    sortingFunction = (a, b) => 
                            (a.localeCompare(b));
                    break;
                case '3': // sort by last name
                    sortingFunction = (a, b) => 
                        (a.localeCompare(b));
                    break;
                case '4': // sort by email date
                    sortingFunction = (a, b) => 
                        (a.localeCompare(b));
                    break;
                case '5': // sort by phone
                    sortingFunction = (a, b) => 
                    (parseInt(a) - parseInt(b));
                    break;
                default:
                    break;
            }
            sortTable($('#mytable'),'asc');
        
        });
    


    //===================================================================
    // It works
    //===================================================================

    $('th').click(function(){
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })
    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() }


    });
