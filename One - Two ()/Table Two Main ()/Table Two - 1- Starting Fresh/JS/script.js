
let myTable = [];

let S_myTable = myTable;

let inc = 0;


makeTable = function(_data, _xx=0){
    $("#tbody").html("");
    
    let tempTable = _data;
    let newFilterAttay = [];
    let x = 0;
    let y = 10;
    

    if($("#search").val().toUpperCase().length > 0){
        for (i = 0; i < tempTable.length; i++) {
            if(tempTable[i].artist.toUpperCase().indexOf($("#search").val().toUpperCase())> -1) {
                newFilterAttay.push(tempTable[i])
            } 
        }
        tempTable = newFilterAttay;
    }

    

    if(_xx > 0){
        if(((tempTable.length - (inc)) > 10)){
            inc = inc + _xx
    }}
    else if(_xx < 0){

        if(inc !== 0){
            inc = inc + _xx
        }
    }
    else{
        inc = 0;
    }

    z1 = x+inc
    z2 = y+inc

    
    tempTable = tempTable.slice(z1, z2);
    
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


$(document).on('input', '#search', function (event) {
    makeTable(myTable);
    });



$(document).on('click', '#next', function (event) {
       
        makeTable(myTable, 10);
    
});

$(document).on('click', '#prev', function (event) {
    // if(myTable.length > index_02){
    //     index_01 += 10;
    //     index_02 += 10;
        makeTable(myTable, -10 );
    // }
});



$(document).on('click', '.del-row', function (event) {
    var $row = $(this).closest('tr');
    var idd = $row.find('.f_Name').text();
  
    myTable = $.grep(myTable, obj => obj.rank != idd)

    $(event.target).parent().parent().remove()


});
// $(document).on('change', "#sort", function (event) {

//     let a_books = table.list;
//     let pickedValue = event.target.value;


//         if (pickedValue === "1"){
//             a_books.sort(function(a, b){
//                 return a.rank - b.rank;
//             });
//         }
//         else if (pickedValue === "2"){
//             a_books.sort(function(a,b) {
//                 return a.artist.localeCompare(b.artist);
//             });
//         }
//         else if (pickedValue === "3"){
//             a_books.sort(function(a,b) {
//                 return a.song.localeCompare(b.song);
//             });
//         }
//         else if (pickedValue === "4"){
//             a_books.sort(function(a,b) {
//                 return a.song.localeCompare(b.song);
//             });
//         }
//         else if (pickedValue === "5"){
//             a_books.sort(function(a, b){
//                 return a.releaseYear - b.releaseYear;
//             });
//         }
//         else if (pickedValue === "6"){
//             a_books.sort(function(a, b){
//                 return a.rank - b.rank;
//             });
//         }
//         else{}

//         table.makeTable(a_books);
// });



