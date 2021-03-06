
let books =[];

let sort;
let maxsize = 0;


let page = 0;

function GetData(){
$.ajax({
    method: "GET",
    url: "http://www.json-generator.com/api/json/get/cfUffYzlmG?indent=2",
    success:function(data){
        books = data;
        for(let i = 0; i  < books.length; i++){
            books[i].id = (i+1);
        }
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
   
    for(let index = 0; index < books.length; index++){
      $("#myTable").append(
          "<tr>"+
                "<td class='td-id'>"+ books[index].id + "</td>" +
                "<td class='td-kind'>"+ books[index].kind +"</td>"+
                "<td class='td-title'>"+ books[index].title +"</td>"+
                "<td class='td-author'>"+ (books[index].author || books[index].editor )+"</td>"+
                "<td class='td-publisher'>"+ books[index].publisher +"</td>"+
                "<td class='td-year'>"+ books[index].year +"</td>"+
                "<td class='td-length'>"+ books[index].length +"</td>"+
                "<td class='td-series' >"+ (books[index].series ? `${books[index].seriesNumber} #${books[index].series}` : ``) + "</td>"+
                "<td>"+
                    "<button class='edit'>edit</button>" +
                    "<button class='del'>del</button> " +
                    "<button class='save'>save</button>"+
                "</td>"+
          "</tr>");
      
    }
  }

  let filterTable = function(data){
    $("#tBody").html("");
    // zaso ne moze da se dodate nov object
    // ne mozes da dodelis nov object
    

    // function array_Clone(data){
    //     let newArr = data;
    //     return newArr;
    //     }
    //=======================
    // function array_Clone(data){
    //    // let newArr = data;
    //     return data;
    //     }
    //=======================
    // let array_Clone = data => data.slice(0);
    //=======================
    // let array_Clone = data => data;
    //=======================
    // Easiest way to deep clone Array or Object:
    // let myNewTable = JSON.parse(JSON.stringify(data));
    //=======================
    // Technically slice IS the fastest way, HOWEVER it is even faster if you add the 0 begin index.
    // myNewTable = data.slice(0);
    //=======================
    // let myNewTable = [].concat(data);
    //=======================
    // let myNewTable = [...data];
    //=======================
    // Array.prototype.clone = function(){
    //     return this.map(e => Array.isArray(e) ? e.clone() : e);
    //   };
    //  let myNewTable = data.clone();
    //=======================
    //  let myNewTable = data.map(e => e);
    //=======================
    // let myNewTable = data.length === 1 ? [data[0]] : Array.apply(this, data);
    //=======================
    // let i = data.length;
    // let myNewTable = [];
    // while(i--) { myNewTable[i] = data[i]; }
    //=======================

   
   // console.log(array_Clone(data));
   // let myNewTable = array_Clone(data);
   // console.log(myNewTable);
    
    if(sort)
    {
        if(sort == "novel") // filter vraka nov object i zatoa raboti samo tuka
        {
            myNewTable = data.filter(n => n.kind === "novel");
        }
        else if (sort == "anthology")
        {
            myNewTable = data.filter(n => n.kind === "anthology");
        }
     }
    // else
    // {
    //     
    // }
        myNewTable.push({id:123, kind: "asd"});
    maxsize = myNewTable.length;
    myNewTable = data.slice((0 + page), (10 + page)); // vraka nov object
   
    makeMyTable(myNewTable);
  }

  $("#novel").click(function(){
      page = 0;
      sort = "novel";
      filterTable(books);
  });

  $("#anthology").click(function(){
      page = 0;
      sort = "anthology";
    filterTable(books);
});

$("#next").click(function(){
    if(maxsize > parseInt(page+10))
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

$(document).on('click', '.del', function (event) {
     books.splice(findMyIndexInArray($(this)), 1);
     $(event.target).parent().parent().remove()
     maxsize -= 1;
}); 


$(document).on('click', '.edit', function (event) {

    let row = $(this).closest('tr');
    let index = findMyIndexInArray($(this));
    let myInputKind = "<input class='in_kind' type='text' value='"+books[index].kind+"'>";
    let myInputTitle = "<input class='in_title' type='text' value='"+books[index].title+"'>";
    let myInputAuthor = "<input class='in_author' type='text' value='"+books[index].author+"'>";
    let myInputPublisher = "<input class='in_publisher' type='text' value='"+books[index].publisher+"'>";
    let myInputYear = "<input class='in_year' type='text' value='"+books[index].year+"'>";
    let myInputLength = "<input class='in_length' type='text' value='"+books[index].length+"'>";
    let myInputSeries =   books[index].series ? "<input class='in_series_number' type='text' value='"+books[index].seriesNumber+"'>" + "<input class='in_series' type='text' value='"+books[index].series+"'>"  : ""
    

    row.find('.td-kind').html(myInputKind)
    row.find('.td-title').html(myInputTitle)
    row.find('.td-author').html(myInputAuthor)
    row.find('.td-publisher').html(myInputPublisher)
    row.find('.td-year').html(myInputYear)
    row.find('.td-length').html(myInputLength)
    row.find('.td-series').html(myInputSeries)

    let edit = row.find('.edit')
    let del_btn = row.find('.del')
    let save_btn = row.find('.save')

    edit.css('display','none');
    del_btn.css('display','none');
    save_btn.css('display','inline-block');
       
});

$(document).on('click', '.save', function (event) {
    let row = $(this).closest('tr');
    let index = findMyIndexInArray($(this));

    books[index].kind = row.find('.in_kind').val();
    books[index].title = row.find('.in_title').val();
    books[index].author = row.find('.in_author').val();
    books[index].publisher = row.find('.in_publisher').val();
    books[index].year = row.find('.in_year').val();
    books[index].length = row.find('.in_length').val();

    if(books[index].series){
        books[index].series = row.find('.in_series').val()
        books[index].seriesNumber = row.find('.in_series_number').val()
    }

    let booksSeries = (books[index].series ? `${books[index].seriesNumber} #${books[index].series}` : ``);
    row.find('.td-kind').html( books[index].kind)
    row.find('.td-title').html( books[index].title)
    row.find('.td-author').html( books[index].author)
    row.find('.td-publisher').html(books[index].publisher)
    row.find('.td-year').html(books[index].year)
    row.find('.td-length').html( books[index].length)
    row.find('.td-series').html( booksSeries)

    let edit = row.find('.edit')
    let del_btn = row.find('.del')
    let save_btn = row.find('.save')

    edit.css('display','inline-block');
    del_btn.css('display','inline-block');
    save_btn.css('display','none');

});
let findMyIndexInArray = function(_this){
    let row = _this.closest('tr');
    let _id = row.find('.td-id').text();
    let index;
    index = books.findIndex(n => n.id==_id);
    return index;
}


























//============================================================================================
//                     automatic sorting table with click on header
//============================================================================================

$('th').click(function(){
    let table = $(this).parents('table').eq(0)
    let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    // alert(($(this).index()));
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (let i = 0; i < rows.length; i++){table.append(rows[i])}
})
function comparer(index) {
    return function(a, b) {
        let valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
    }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

//============================================================================================
