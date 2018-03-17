$(document).ready(function(){
// let idCounter = 0;
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

            
        // if($("td:even").css('background-color') === 'rgb(37, 114, 18)')
		// {
		// 	$("td:even").css( "background-color", "#a35635" );
		// 	$("td:odd").css( "background-color", "#828e20" );
		// }
		// else
		// {
		// 	$("td:even").css({"background-color": "#257212", "color": "#ffffff"});
		// 	$("td:odd").css({"background-color": "#103070", "color": "#ffffff"});
		// }
    });

    $(document).on('click', '.del-row', function (event) {
        $(event.target).parent().parent().remove()
        $("td:even").css( "background-color", "#a35635" );
		$("td:odd").css( "background-color", "#828e20" );
  });

    $(document).on('click', '.del-Btn', function (event) {
        // $(event.target).parent().parent().remove()
        var $row = $(this).closest('tr');
        var id = $row.find('.td-id').text();
        var fName = $row.find('.f_Name').text();
        var lName = $row.find('.l_Name').text();
        var email = $row.find('.e_mail').text();
        var pass = $row.find('.pass_in').text();
        var phone = $row.find('.phone_in').text();
        // var lName = $row.find('.l_name').text();

        // console.log(fName)


        let choose_your_poison = "<td class='td-id'>"+ id +"</td><td class='f_Name'>"+"<input class='in_f_name' type='text' value='"+fName+"'>"+
        "</td><td class='l_Name'>"+"<input class='in_l_name' type='text' value='"+lName+"'>"+
        "</td><td class='e_mail'>"+"<input class='in_e_mail' type='text' value='"+email+"'>"+
        "</td><td class='pass_in'>"+"<input class='in_pass_in' type='text' value='"+pass+"'>"+
        "</td><td class='phone_in'>"+"<input class='in_phone_in' type='text' value='"+phone+"'>"+
         "</td><td class='td-three-Btn'><button id='saveBtn"+idCounter+"' class='save-Btn'>save</button><button id='editBtn"+idCounter+"' class='edit-Btn'>edit</button><button id='delBtn"+idCounter+"' class='del-Btn'>del</button></td>"+ "<td class='td-del'><button class='del-row'>Del</button></td>"


        // var $row =
        //  $(this).closest('tr').html("<td>pedercino</td>");
         $(this).closest('tr').html(choose_your_poison);

        // // var row = $(this).find("tr").html();
        // var desc = $(this).find(".description").html();
        // $("#selected-title").html(title);
        // $("#selected-description").html(desc);

        $("td:even").css( "background-color", "#a35635" );
		$("td:odd").css( "background-color", "#828e20" );

        // $('.del-Btn').css('display','none');
        // $('.edit-Btn').css('display','none');
        // $('.save-Btn').css('display','block');

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

        // console.log(f_Name)

        // $(".f_Name").html(f_Name);
        // $(".f_Name").html(f_Name);
        // $(".l_Name").html(l_Name);
        // $(".e_mail").html(e_Mail);
        // $(".pass_in").html(pass_W);
        // $(".phone_in").html(phone_N);

        
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
    // $(`#delBtn${idCounter}`).click( function (event) {
    //     alert();
    // });
//===================================================================
   
    // $(document).on('click', '#sup', function (event) {
    //     // alert()
    //     sortTable()
    // });

    // $(document).on('click', '#sup', function (event) {
    // });

//===================================================================
// (function(a, b){
//         return b.length - a.length;
//       })

// sortingFunction = (function(a, b){
//         return  (parseInt(a.rank) - parseInt(b.rank));

//===================================================================
//===================================================================
//===================================================================

$("#sort").on("change", function(event){

    let pickedValue = event.target.value;
    if (pickedValue === "1"){



        let table = $('#my-table')
        let rows = table.find('.td-id').toArray()


        let id_array = [];

        for (let i = 0; i < rows.length; i++){
            let id_row = table.find('.td-id:eq('+(i)+')').html()
            id_array.push(id_row);   
        }

    //     let sorted_arry = id_array.sort(function(a, b){
    //         return (parseInt(a) - parseInt(b));
    // })
//=======================================================================================================

let f_name_array = [];

for (let i = 0; i < rows.length; i++){

        let f_n_row2 = table.find('.f_Name:eq('+(i)+')').html()
        f_name_array.push(f_n_row2);  
}
//=======================================================================================================

let l_name_array = [];

for (let i = 0; i < rows.length; i++){

        let f_name_row = table.find('.l_Name:eq('+(i)+')').html()
        l_name_array.push(f_name_row);  
}
//=======================================================================================================
let e_mail_array = [];

for (let i = 0; i < rows.length; i++){

        let e_mail_row = table.find('.e_mail:eq('+(i)+')').html()
        e_mail_array.push(e_mail_row);  
}

//=======================================================================================================
let password_array = [];

for (let i = 0; i < rows.length; i++){

        let password_row = table.find('.pass_in:eq('+(i)+')').html()
        password_array.push(password_row);  
}

//=======================================================================================================
let phone_array = [];
for (let i = 0; i < rows.length; i++){

        let phone_row = table.find('.phone_in:eq('+(i)+')').html()
        phone_array.push(phone_row);  
}

//=======================================================================================================
console.log(id_array);
console.log(f_name_array);
console.log(l_name_array);
console.log(e_mail_array);
console.log(password_array);
console.log(phone_array);

//=======================================================================================================
let tb_index_array = [];
let tb_first_array = [];
let tb_last_array = [];
let tb_email_array = [];
let tb_password_array = [];
let tb_phone_array = [];

// var input = [2,3,8,1,4,5,9,7,6];
// var input = id_array;

// var output = [];


// var inserted;

// for (var i = 0, ii = input.length ; i < ii ; i++){
//   inserted = false;
//   for (var j = 0, jj = output.length ; j < jj ; j++){
//     if (input[i] < output[j]){
//       inserted = true;
//       output.splice(j, 0, input[i]);
//       break;
//     }
//   }
  
//   if (!inserted)
//     output.push(input[i])
//     tb_first_array.push(f_name_array[i])
// }


// //=======================================================================================================

// let red_flag = false;

// for(let i = 0; i < input.length; i++){
//     for(let j = i+1; j < input.length; j++)
//     {
//         if(input[i] < input[j])
//             {
//                 red_flag = true;
//             }
//             else
//             {
//                 red_flag = false;
//             }
//             if (red_flag == false) break; 
//     }
//     if(red_flag == true){
// 		output.push(input[i]);
// 	}
// }
// //======================================================================================================
// // function bubbleSort(arr){

//     // var len = arr.length;


//     for (var i = input.length-1; i>=0; i--){
//       for(var j = 1; j<=i; j++){
//         if(arr[j-1]>arr[j]){
//             var temp = arr[j-1];
//             arr[j-1] = arr[j];
//             arr[j] = temp;
//          }
//       }
//     }




// //     return arr;
// //  }

//==================================================================================
// Gold
//==================================================================================

// var reference_array = ["3", "5", "6", "2"];
// // var reference_array = ["ryan 1", "dan 3", "steven 4", "bob 5", "corbin 2"];
// var array = ["bob 1", "dan 2", "steven 3", "corbin 4"];
// array.sort(function(a, b) {
//   return reference_array.indexOf(b) - reference_array.indexOf(a);
// });
// console.log(array);
// console.log(reference_array);
//==================================================================================

// var reference_array = ["aa", "bb", "dan", "dd", "cc"];
// reference_object = {};
// for (var i = 0; i < reference_array.length; i++) {
//     reference_object[reference_array[i]] = i;
// }
// var array = ["bob", "dan", "steven", "corbin"];
// array.sort(function(a, b) {
//   return reference_object[a] - reference_object[b];
// });
// let new_arrau = array.sort(function(a, b){
//     return (a.localeCompare(b));
//   })

// console.log(reference_object);
// console.log(new_arrau);
// console.log(array);
// console.log(reference_array);

//==================================================================================

// array.sort(function(a, b) {
//     return reference_array.indexOf(a) - reference_array.indexOf(b);
//   });
//   console.log(array);




//==================================================================================
// [firstsordered, firstsortorder] = sort(input);
// secondsorted = second_array(firstsortorder);

// console.log(output);
// console.log(tb_first_array);
//=======================================================================================================
        
        // alert(new_rows);
        
                // alert(sorted_arry[1]); 

        // var sup = sorted_arry.sort(comparer(0))

        $(tbody).html("");
        // for (var i = 0; i < rows.length; i++){table.append(sorted_arry[i])}
        for (var i = 0; i < rows.length; i++){
        
        $("#my-table").append("<tr><td class='td-id'>"+ (id_array[i])+"</td><td class='f_Name'>"+$("#name-input").val()+
        "</td><td class='l_Name'>"+$("#lastname-input").val()+
        "</td><td class='e_mail'>"+$("#email-input").val()+
        "</td><td class='pass_in'>"+$("#pass-input").val()+
        "</td><td class='phone_in'>"+$("#phone-input").val()+
         "</td><td class='td-three-Btn'><button id='saveBtn"+idCounter+"' class='save-Btn'>save</button><button id='editBtn"+idCounter+"' class='edit-Btn'>edit</button><button id='delBtn"+idCounter+"' class='del-Btn'>del</button></td>"+ "<td class='td-del'><button class='del-row'>Del</button></td>"+ "</tr>")
        }

        
    		$("td:even").css( "background-color", "#a35635" );
            $("td:odd").css( "background-color", "#828e20" );


    }
});


    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() }









//===================================================================
/*
 $("#sort").on("change", function(event){
        var pickedValue = event.target.value;
        var sortingFunction = null;
        switch(pickedValue){
            case '1': //sort by rank
            sortingFunction = (function(a, b){
                aa = $(a).children('td').eq(2).text()
                bb = $(b).children('td').eq(2).text()

                return  (parseInt(aa) - parseInt(bb));
            })
                break;
            case '2': // sort by song name
                sortingFunction = (a, b) => 
                        (a.song.localeCompare(b.song));
                break;
            case '3': // sort by artist name
                sortingFunction = (a, b) => 
                    (a.artist.localeCompare(b.artist));
                break;
            case '4': // sort by release date
                sortingFunction = (a, b) => 
                    (parseInt(a.releaseYear) - parseInt(b.releaseYear));
                break;
            case '5': // sort by duration
                sortingFunction = (a, b) => 
                    (evaluateMinutesToSeconds(a.duration) - 
                    evaluateMinutesToSeconds(b.duration));
                break;
            default:
                break;
        }
        function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
    });
    */
  /*  */
//===================================================================

//===================================================================
//===================================================================
// It works
//===================================================================
$('th').click(function(){
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    // alert(($(this).index()));
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
// alert(($(row).children('td').eq(index).text()));

//===================================================================
//===================================================================
/*
function sortTable(){

    var rows = $('#my-table tbody  tr').get();
  
    rows.sort(function(a, b) {
  
    var A = $(a).children('td').eq(1).text().toUpperCase();
  
    var B = $(b).children('td').eq(1).text().toUpperCase();
  
    if(A < B) {
  
      return -1;
  
    }
    if(A > B) {
      return 1;
    }
    return 0;
    });
    $.each(rows, function(index, row) {
      $('#my-table').children('tbody').append(row);
    });
  }



*/
});
/*
function sortTable(){

  var rows = $('#mytable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();

  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {

    return -1;

  }
  if(A > B) {
    return 1;
  }
  return 0;
  });
  $.each(rows, function(index, row) {
    $('#mytable').children('tbody').append(row);
  });
}
*/


//==========================================================================
// WORKS
//==========================================================================
// $("#sort").on("change", function(event){

//     let pickedValue = event.target.value;
//     if (pickedValue === "1"){

//     // let table = $('tbody').parents('table').eq(0)
//     // var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))

//         // alert();
//         // let table = $('#my-table').parents('table').eq(0)
//         let table = $('#my-table')
//         // var rows = table.find('.td-id').toArray().sort(function(a, b){
//         //     return (parseInt(a) - parseInt(b));
//         //   })
//         //   alert(rows);
//         // var rows = table.find('.td-id').toArray().sort(comparer($(this).index()))
//         let rows = table.find('.td-id').toArray()
//         // console.log(rows.length)
//         let moo = rows.length
//         let new_rows = [];
//         // let haha = rows.map(n => n.getCellValue)
        

//         for (let i = 0; i < rows.length; i++){
//             if(new_rows.length === 0 )
//             {
//                 let row1 = table.find('.td-id').html()
//                  new_rows.push(row1);
//             }
//             else
//             {
//                 let row2 = table.find('.td-id:gt('+(i-1)+')').html()
//                 new_rows.push(row2);   
//             }
          
//         }

//         alert(new_rows);




// alert(new_rows);
// let sorted_arry = new_rows.sort(function(a, b){
//         return (parseInt(a) - parseInt(b));
// })
//         alert(sorted_arry); 




//         // $(tbody).html("");
//         // for (var i = 0; i < rows.length; i++){table.append(rows[i])}
        
//     }
// });














   

