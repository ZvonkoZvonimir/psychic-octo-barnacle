
let books =[];
//GetData()
let id = 1;
let sort;

let pageSize = 0;
let page = 0;

function GetData(){
$.ajax({
    method: "GET",
    url: "http://www.json-generator.com/api/json/get/cfUffYzlmG?indent=2",
    success:function(data){
        books = data;
        console.log(books);
        filterTable(books);
    },
    error: function(error){
        console.log(error);
    }
})

}
  $("#Get_Data").click(function () {
      sort = "";
        GetData()
  })

  let makeMyTable = function(books)
  {
      let haha = 0;
      if (pageSize==11){haha=-1}

    for(let index = 0; index < books.length + haha; index++){  
      $("#myTable").append(
          "<tr>"+
            "<td>"+ (id + page) + "</td>" +
            "<td>"+ books[index].kind +"</td>"+
            "<td>"+ books[index].title +"</td>"+
            "<td>"+ (books[index].author || books[index].editor )+"</td>"+
            "<td>"+ books[index].publisher +"</td>"+
            "<td>"+ books[index].year +"</td>"+
            "<td>"+ books[index].length +"</td>"+
            "<td>"+ (books[index].series ? `${books[index].seriesNumber} #${books[index].series}` : ``) + "</td>"+
          "</tr>");
        id++
    }
  }

  let filterTable = function(books){
    $("#tBody").html("");
    id = 1;

    if(sort)
    {
        if(sort == "novel")
        {
            books = books.filter(n => n.kind === "novel");
        }
        else if (sort == "anthology")
        {
            books = books.filter(n => n.kind === "anthology");
        }
    }
    books = books.slice((0 + page), (11 + page));
    pageSize = books.length;
    makeMyTable(books);
  }

  $("#novel").click(function(){
      sort = "novel";
      filterTable(books);
  });

  $("#anthology").click(function(){
      page = 0;
      sort = "anthology";
    filterTable(books);
});

$("#next").click(function(){
    if(pageSize > 10)
    {
    page +=10;
    filterTable(books);
    }
}); 

$("#prev").click(function(){
    if(page != 0)
     {
        page -=10;
        filterTable(books);
    }

});

$("#console").click(function(){
    console.log(books);
});