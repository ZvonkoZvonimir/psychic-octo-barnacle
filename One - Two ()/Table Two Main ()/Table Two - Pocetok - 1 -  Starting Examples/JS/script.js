

// $.ajax({
//     method:"GET",
//     url:"http://demo6418849.mockable.io/songs",
//     // url:"https://learnwebcode.github.io/json-example/animals-1.json",
//     success:function(data){
//         // console.log(data);
       
//         // table.setList(data);
//     },
//     error:function(error){
//         console.log(error);
//     }
// })
$(document).on('click', '#sup', function (event) {
   $.ajax({
    method:"GET",
    url:"http://demo6418849.mockable.io/songs",
    // url:"https://learnwebcode.github.io/json-example/animals-1.json",
    success:function(data){
        // console.log(data);
         data.forEach(song => {
            $("<tr>").append("tbody");
            let row = $("<tr>");
            $("<td>").text(song.rank).appendTo(row);
            $("<td>").text(song.song).appendTo(row);
            $("<td>").text(song.artist).appendTo(row);
            $("<td>").text(song.releaseYear).appendTo(row);
            $("<td>").text(song.duration).appendTo(row);
            $("<td>").html($("<button class='save-Btn'>save</button>"+
            "<button class='edit-Btn'>edit</button>"+
            "<button class='del-Btn'>Broken</button>")).appendTo(row);
           
            $("<td>").html($("<button class='del-row'>Del</button>")).appendTo(row);
            $("tbody").append(row);
        });

        //==========================================================================
        // data.forEach(n => {
        //     $("#my-table").append(dontCoptThatFloppy(n));
        // });

        //==========================================================================
        // data.forEach(song => {
        //     $("<tr>").append("tbody");
        //     let row = $("<tr>");
        //     $("<td>").text(song.rank).appendTo(row);
        //     $("<td>").text(song.song).appendTo(row);
        //     $("<td>").text(song.artist).appendTo(row);
        //     $("<td>").text(song.releaseYear).appendTo(row);
        //     $("<td>").text(song.duration).appendTo(row);
        //     $("tbody").append(row);
        // });

        //==========================================================================
    //     for(i = 0; i < data.length; i++)
    //     {
    //     $("#my-table").append(dontCoptThatFloppy(data));
    // }
        //==========================================================================
    },
    error:function(error){
        console.log(error);
    }
})
});



function dontCoptThatFloppy(data) {

    let proactiveBitch = ("<tr><td class='td-id'>"+ data.rank +
    "</td><td class='f_Name'>"+data.rank+
    "</td><td class='l_Name'>"+data.song+
    "</td><td class='e_mail'>"+data.artist+
    "</td><td class='pass_in'>"+data.releaseYear+
    "</td><td class='phone_in'>"+data.duration+
    "</td><td class='td-three-Btn'><button class='save-Btn'>save</button>"+
    "<button class='edit-Btn'>edit</button><button class='del-Btn'>Broken</button></td>"+ 
    "<td class='td-del'><button class='del-row'>Del</button></td>"+"</tr>")

    return proactiveBitch;
}