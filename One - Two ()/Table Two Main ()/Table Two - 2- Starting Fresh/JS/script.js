
let myTable = [];
//
let S_myTable = myTable;
let index_01 = 0;
let index_02 = 10;

// let input = $("#search").val().toUpperCase();

makeTable = function(_data, _x=0, _y=10){
    $("#tbody").html("");
    // let thisFilter = thissFilter.toUpperCase();
    let tempTable = _data;
    let newFilterAttay = [];
    // x = 0;
    // y = 10; 

    if($("#search").val().toUpperCase().length > 0){
        for (i = 0; i < tempTable.length; i++) {
            if(tempTable[i].artist.toUpperCase().indexOf($("#search").val().toUpperCase())> -1) {
                newFilterAttay.push(tempTable[i])
            } 
        }
        tempTable = newFilterAttay;
    }
    
    tempTable = tempTable.slice(_x, _y);
    
    for(i = 0; i < tempTable.length; i++)
    {
    $("#my-table").append(dontCoptThatFloppy(tempTable));
    }// end of for_loop
}



$(document).on('click', '#sup', function (event) {
   $.ajax({
    method:"GET",
    url:"http://demo6418849.mockable.io/songs",
    success:function(data){
        myTable = data; // works
        makeTable(myTable);
    },
    error:function(error){
        console.log(error);
    }
})
});// end of #sup

    

function dontCoptThatFloppy(data) {

    let proactiveBitch = ("<tr><td class='td-id'>"+ (i+1) +
    "</td><td class='f_Name'>"+data[i].rank+
    "</td><td class='l_Name'>"+data[i].song+
    "</td><td class='e_mail'>"+data[i].artist+
    "</td><td class='pass_in'>"+data[i].releaseYear+
    "</td><td class='phone_in'>"+data[i].duration+
    "</td><td class='td-three-Btn'><button class='save-Btn'>save</button>"+
    "<button class='edit-Btn'>edit</button><button class='del-Btn'>Broken</button></td>"+ 
    "<td class='td-del'><button class='del-row'>Del</button></td>"+"</tr>")

    return proactiveBitch;
}
$(document).on('click', '#sup2', function (event) {
// console.log(table.list);
// this.list.sort(this.sortingFunction
//  let $myTable = $("#my-table");

// $("#tbody").html("");

    // let a_books = table.list.sort((a, b) => a.artist.localeCompare(b.artist));
    let a_books = table.list.sort(function(a, b){
        return b.rank - a.rank;
      });
    table.makeTable(a_books);
});

$(document).on('input', '#search', function (event) {
    // alert(filter);
    makeTable(myTable);
    // var input, filter, ul, li, a, i;
    // input = $("#search").val()
    // filter = input.toUpperCase();
    // let newFilterAttay = [];

    // // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < table.list.length; i++) {
    //     if(table.list[i].artist.toUpperCase().indexOf(filter)> -1) {
    //         newFilterAttay.push(table.list[i])
    //     } 
    // }
    // console.log(newFilterAttay)
    // table.makeTable(newFilterAttay);
    });

$(document).on('click', '#sup3', function (event) {
        let a_books = table.list.sort((a, b) => a.artist.localeCompare(b.artist));
        table.makeTable(a_books);
    });

$(document).on('click', '#next', function (event) {
    if(myTable.length > index_02){
        index_01 += 10;
        index_02 += 10;
        makeTable(myTable, index_01 ,index_02 );
    }
});



$(document).on('click', '.del-row', function (event) {
    var $row = $(this).closest('tr');
    var idd = $row.find('.f_Name').text();
   
    //================================================
    // a_contacts = a_contacts.filter(function( obj ) {
    //     return obj.id != idd;
    //   });
    // //================================================
    // a_contacts = a_contacts.filter( obj => obj.id != idd);
    //================================================
    // a_contacts = $.grep(a_contacts, function(obj){ 
    //     return obj.id != idd; 
    // });
    //================================================
    myTable = $.grep(myTable, obj => obj.rank != idd)

    $(event.target).parent().parent().remove()


});
$(document).on('change', "#sort", function (event) {

    let a_books = table.list;
    let pickedValue = event.target.value;


        if (pickedValue === "1"){
            a_books.sort(function(a, b){
                return a.rank - b.rank;
            });
        }
        else if (pickedValue === "2"){
            a_books.sort(function(a,b) {
                return a.artist.localeCompare(b.artist);
            });
        }
        else if (pickedValue === "3"){
            a_books.sort(function(a,b) {
                return a.song.localeCompare(b.song);
            });
        }
        else if (pickedValue === "4"){
            a_books.sort(function(a,b) {
                return a.song.localeCompare(b.song);
            });
        }
        else if (pickedValue === "5"){
            a_books.sort(function(a, b){
                return a.releaseYear - b.releaseYear;
            });
        }
        else if (pickedValue === "6"){
            a_books.sort(function(a, b){
                return a.rank - b.rank;
            });
        }
        else{}

        table.makeTable(a_books);
});



// let a_books = table.list;
// var pickedValue = event.target.value;


//     if (pickedValue === "1"){
//         a_books.sort((a, b) => a.artist.localeCompare(b.artist));
//         table.makeTable(a_books);
//     }

// });

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     // input = $("#name-input").val()
//     input = $("#name-input");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if(table.list.artist.toUpperCase().indexOf(filter)> -1) {
//         // if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             table.list[i].style.display = "";
//         } else {
//             table.list[i].style.display = "none";
//         }
//     }
// }