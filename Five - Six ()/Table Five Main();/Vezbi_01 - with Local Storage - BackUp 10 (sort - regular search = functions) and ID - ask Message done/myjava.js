
let books =[];
let sort;
let maxsize = 0;
let page = 0;
let searchTerm;
let myBooks;
let settingMyId = 1;

let targetIndexForDeletion;
let targetBtnForDeletion;

if(localStorage["myBooks"])
{
    myBooks = JSON.parse(localStorage["myBooks"]);
}

if(myBooks){
    filterTable(myBooks);
}

function GetData(){
$.ajax({
    method: "GET",
    url: "http://www.json-generator.com/api/json/get/cfUffYzlmG?indent=2",
    success:function(data){
        books = data;
        settingMyId = 1;

        for(let i = 0; i  < books.length; i++){
            books[i].id = (settingMyId);
            settingMyId++;
        }
        localStorage["myBooks"] = JSON.stringify(books);
        myBooks = JSON.parse(localStorage["myBooks"]);
      
        filterTable(myBooks);
    },
    error: function(error){
        console.log(error);
    }
})

}


// -gives you the "myBooks" array in console log
// that is saved in local storage. Refresing the page or
// closing the browser doesn't affect this array.

$("#local_storage").click(function () {
    console.log(myBooks);
});

$("#make_table").click(function () {
    filterTable(myBooks);
});

$(document).on('change', "#sortingMyTable", function (event) {
    filterTable(myBooks);
});

$(document).on('click', "#regularSearchBtn", function (event) {
    searchTerm = $("#regularSearch").val();
    filterTable(myBooks);
});

$("#Get_Data").click(function () {
    sort = "";
    GetData()
})

function makeMyTable(books) 
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


function filterTable(data) {
$("#tBody").html("");

if($("#sortingMyTable").val()){
   //  mySorting(data); // kako void funkcija i nemora "return data", ama ako sakas stavi samo sto taa vredonst nema da ja koristis.
    data = mySorting(data); //  mora so "return data", za taa vrednost da ja sravis vo 'data' = mySorting(data);
}// end of if sorting :)

if(searchTerm){
   data =  mySearch(data);
}// end of search :)

    if(sort)
    {
        if(sort == "novel")
        {
            data = data.filter(n => n.kind === "novel");
        }
        else if (sort == "anthology")
        {
            data = data.filter(n => n.kind === "anthology");
        }
    }

    maxsize = data.length;
    data = data.slice((0 + page), (10 + page));
    makeMyTable(data);
}

$("#novel").click(function(){
    page = 0;
    sort = "novel";
    filterTable(myBooks);
});

$("#anthology").click(function(){
    page = 0;
    sort = "anthology";
filterTable(myBooks);
});

$("#next").click(function(){
    if(maxsize > parseInt(page+10))
    {
    page +=10;
    filterTable(myBooks);
    }
}); 

$("#prev").click(function(){
    if(page != 0)
     {
        page -=10;
        filterTable(myBooks);
    }

});

// -gives you the "books" array in console log
// that restarts it's self after refreshing the page.
// -we fill the books array with the GetData() function.
$("#console").click(function(){
    console.log(books);
});

yes

$(document).on('click', '#yes', function (event) {
    myBooks.splice(targetIndexForDeletion, 1);
    localStorage["myBooks"] = JSON.stringify(myBooks);
    targetBtnForDeletion.parent().parent().remove()
    maxsize -= 1;
    targetIndexForDeletion = null;
    targetBtnForDeletion = null; 

}); 
$(document).on('click', '#no', function (event) {


}); 

$(document).on('click', '.del', function (event) {

    //return confirm("are you sure?")
    let result = confirm("Want to delete?");
    if (result) {
    //Logic to delete the item
    myBooks.splice(findMyIndexInArray($(this)), 1);
    localStorage["myBooks"] = JSON.stringify(myBooks);
    $(event.target).parent().parent().remove()
    maxsize -= 1;

    }
        // sup = findMyIndexInArray($(this));
        // targetBtnForDeletion = $(this);
        // $('#delete_div').css('display','inline-block');
    
}); 

$("#new").click(function(){
$("#main").css("display","none");
$("#addNewBook").css("display","inline");  
});

$("#reverse").click(function(){
    $("#main").css("display","inline");
    $("#addNewBook").css("display","none");
});

$("#addForm").click(function(){
    let _kind = $("#newKind").val();
    let _title = $("#newTitle").val();
    let _author = $("#newAuthor").val();
   
    // if (myBooks.some(e => e.title === _title)) {
    if (myBooks.findIndex(n => n.title === "Dark Benediction")) {
        let magenicIndex = myBooks.findIndex(n => n.title === "Dark Benediction");
       
        console.log(myBooks[magenicIndex].stories);
        console.log(myBooks[magenicIndex]);
        myBooks[magenicIndex].stories.push({haha:"aaaaaaaaaa"});
        console.log(myBooks[magenicIndex].stories);
       
        alert();
      }
      else
      {
        myBooks.push({id: settingMyId , kind: _kind,title: _title, author: _author });

      }
      localStorage["myBooks"] = JSON.stringify(myBooks);
    $("#newTitle").val("");
    $("#newKind").val("");
    $("#newAuthor").val("");
    settingMyId++; 

});


$(document).on('click', '.edit', function (event) {

    let row = $(this).closest('tr');
    let index = findMyIndexInArray($(this));
    let myInputKind = "<input class='in_kind' type='text' value='"+myBooks[index].kind+"'>";
    let myInputTitle = "<input class='in_title' type='text' value='"+myBooks[index].title+"'>";
    let myInputAuthor = "<input class='in_author' type='text' value='"+myBooks[index].author+"'>";
    let myInputPublisher = "<input class='in_publisher' type='text' value='"+myBooks[index].publisher+"'>";
    let myInputYear = "<input class='in_year' type='text' value='"+myBooks[index].year+"'>";
    let myInputLength = "<input class='in_length' type='text' value='"+myBooks[index].length+"'>";
    let myInputSeries =   myBooks[index].series ? "<input class='in_series_number' type='text' value='"+myBooks[index].seriesNumber+"'>" + "<input class='in_series' type='text' value='"+myBooks[index].series+"'>"  : ""
    

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

    localStorage["myBooks"] = JSON.stringify(myBooks);
});

$(document).on('click', '.save', function (event) {
    let row = $(this).closest('tr');
    let index = findMyIndexInArray($(this));

    myBooks[index].kind = row.find('.in_kind').val();
    myBooks[index].title = row.find('.in_title').val();
    myBooks[index].author = row.find('.in_author').val();
    myBooks[index].publisher = row.find('.in_publisher').val();
    myBooks[index].year = row.find('.in_year').val();
    myBooks[index].length = row.find('.in_length').val();

    if(myBooks[index].series){
        myBooks[index].series = row.find('.in_series').val()
        myBooks[index].seriesNumber = row.find('.in_series_number').val()
    }

    let myBooksSeries = (myBooks[index].series ? `${myBooks[index].seriesNumber} #${myBooks[index].series}` : ``);
    row.find('.td-kind').html( myBooks[index].kind)
    row.find('.td-title').html( myBooks[index].title)
    row.find('.td-author').html( myBooks[index].author)
    row.find('.td-publisher').html(myBooks[index].publisher)
    row.find('.td-year').html(myBooks[index].year)
    row.find('.td-length').html( myBooks[index].length)
    row.find('.td-series').html( myBooksSeries)

    let edit = row.find('.edit')
    let del_btn = row.find('.del')
    let save_btn = row.find('.save')

    edit.css('display','inline-block');
    del_btn.css('display','inline-block');
    save_btn.css('display','none');

    localStorage["myBooks"] = JSON.stringify(myBooks);
});
let findMyIndexInArray = function(_this){
    let row = _this.closest('tr');
    let _id = row.find('.td-id').text();
    let index;
    index = myBooks.findIndex(n => n.id==_id);
    return index;
}


function mySearch(data) {
    searchTerm = searchTerm.toLowerCase();
    data = data.filter(n => n.publisher.toLowerCase().includes(searchTerm) || n.title.toLowerCase().includes(searchTerm) );
    return data;
}

function mySorting(data) {
    let mySort = $("#sortingMyTable").val();

    if (mySort === "ID"){
        data.sort(function(a, b){
            return a.id - b.id;
        });
    }
    else if (mySort === "Kind"){
        data.sort(function(a,b) {
            return a.kind.localeCompare(b.kind);
        });
    }
    else if (mySort === "Publisher"){
        data.sort(function(a,b) {
            return a.publisher.localeCompare(b.publisher);
        });
    }
    else if (mySort === "Title"){
        data.sort(function(a,b) {
            return a.title.localeCompare(b.title);
        });
    }
    else if (mySort === "Year"){
        data.sort(function(a, b){
            return a.year - b.year;
        });
    }
    else if (mySort === "Length"){
        data.sort(function(a, b){
            return a.length - b.length;
        });
    }
    else{}

    return data;
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
// });