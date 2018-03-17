
let table = new TableData([]);
$(document).on('click', '#sup', function (event) {
   $.ajax({
    method:"GET",
    url:"http://demo6418849.mockable.io/songs",
    // url:"https://learnwebcode.github.io/json-example/animals-1.json",
    success:function(data){
        table.list = data;
        table.makeTable(data);
      
    },
    error:function(error){
        console.log(error);
    }
})
});// end of #sup

// function makeTable(data){
//     for(i = 0; i < data.length; i++)
//     {
//     $("#my-table").append(dontCoptThatFloppy(data));
// }}
    

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
    var input, filter, ul, li, a, i;
    input = $("#search").val()
    filter = input.toUpperCase();
    let newFilterAttay = [];

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < table.list.length; i++) {
        if(table.list[i].artist.toUpperCase().indexOf(filter)> -1) {
            newFilterAttay.push(table.list[i])
        } 
    }
    console.log(newFilterAttay)
    table.makeTable(newFilterAttay);
    });

$(document).on('click', '#sup3', function (event) {
        let a_books = table.list.sort((a, b) => a.artist.localeCompare(b.artist));
        table.makeTable(a_books);
    });


function TableData(data){
    this.list = data;
    // this.tbody = $("#tbody");
    // this.sortingFunction = null

    // this.populateTable = function(){
    this.makeTable = function(data){
        $("#tbody").html("");
        for(i = 0; i < data.length; i++)
        {
        $("#my-table").append(dontCoptThatFloppy(data));
    }}
}

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
    table.list = $.grep(table.list, obj => obj.rank != idd)

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