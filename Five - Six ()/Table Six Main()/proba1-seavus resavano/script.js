
let myBooks = [];
let page = 0;
let maxsize;
let sort;
let searchTerm;
// console.log(authors);
//localStorage.removeItem(["mybooks"]);
if(localStorage["mybooks"])
{
    myBooks=JSON.parse(localStorage["mybooks"]);  
    filterTable(myBooks);     
}
else{
    getData();
}

function getData(){
    $.ajax({
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/cfUffYzlmG?indent=2",
        success:function(data){
        for(let i = 0; i < data.length; i++)
        {
            data[i].id = (i+1);
        }
        
        localStorage["mybooks"] = JSON.stringify(data);
        myBooks = JSON.parse(localStorage["mybooks"]);
        filterTable(myBooks);

        },
        error: function(error){
            console.log(error);
        }
    })
}

function processPage(data, page){
    let tempData=[];

    for(let i = page - 1*10; i <(page + 1) * 10; i++  )
    {
        tempData.push(data[i]);
    }
    makeMyTable(tempData);
}

function makeMyTable(data){
    $("#myBody").html("");
    for(let i = 0; i < data.length; i += 1){
        $("#myBody").append(`
            <tr>
                <td id="kind${i}">${data[i].kind}</td>
                <td id="author${i}">${data[i].author}</td>
                <td id="title${i}">${data[i].title}</td>
                <td><button id="del${i}">Del</button></td>
                <td><button id="edit${i}">Edit</button><button id="save${i}">Save</button></td>
            </tr>
        `);

        $(`#save${i}`).hide();
        $(`#del${i}`).off("click").on("click", () => {
            let result = confirm("Are you shure that you want to delete this book")
            if(result){
            myBooks = myBooks.filter(item => item.title !== $(`#title${i}`).text());
            localStorage["mybooks"] = JSON.stringify(myBooks);
            filterTable(myBooks);
            }
        });

        $(`#edit${i}`).on("click", () => {
            let placeHolder = $(`#title${i}`).text();
            $(`#title${i}`).html(`<input type"text" value="${placeHolder}"/>`);
            $(`#edit${i}`).hide();
            $(`#save${i}`).show();
        });

        $(`#save${i}`).on("click", () => {
            let _title = $(`#title${i} input`).val();
            myBooks[i].title = _title;
            $(`#title${i}`).html(`${_title}`);
            $(`#save${i}`).hide();
            $(`#edit${i}`).show()
            localStorage["mybooks"] = JSON.stringify(myBooks);
        });       
    }    
}
$("#sortingMyTable").on("change", function(){
    filterTable(myBooks);
});

$("#regularSearchBtn").on("click", function(){
    searchTerm = $("#regularSearch").val();
    filterTable(myBooks);
});

function filterTable(data){

   // $("#myBody").html("");
    $("#topDiv").html("");


    if($("#sortingMyTable").val()){
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

    }// end of if sorting :)


    if(searchTerm){
        searchTerm = searchTerm.toLowerCase();
        data = data.filter(n => n.publisher.toLowerCase().includes(searchTerm) || n.title.toLowerCase().includes(searchTerm) );
     
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

    let btnCount = Math.ceil(data.length / 10);
   
    for (let i = 0; i < btnCount; i++) {

        $("#topDiv").append(`<button id=myPage${(i+1)}>${(i+1)}</button>`);

        $(`#myPage${(i+1)}`).on("click", function () {
            page = (i * 10);
            filterTable(myBooks);
        });
    }
    maxsize = data.length;
    data = data.slice((0 + page), (10 + page));
    makeMyTable(data);
}



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

$("#insert").click(function(){
    $("#newBook").css("display", "inline");
    $("#bodyPage").css("display", "none");
});

$("#back").click(function(){
    $("#newBook").css("display", "none");
    $("#bodyPage").css("display", "block");
});

$("#addBook").click(function(){
   let _title = $("#newBookTitle").val();
   let _author = $("#newBookAuthor").val();
   let _kind = $("#newKind").val();

   myBooks.push({title:_title, author:_author, kind:_kind});
   localStorage["mybooks"] = JSON.stringify(myBooks);

    $("#newBookTitle").val("");
    $("#newBookAuthor").val("");
    $("#newKind").val("novel");
   
})