let counter = 0;
let ourRequesLength = 0;
let sortValue = "";
let findTerm = "";

document.addEventListener("DOMContentLoaded", ()=>{
    let response = fetch("api/books");
    processResponse(response);

    document.getElementById("next").addEventListener("click", () =>{
        if(counter < 2 && ourRequesLength == 51){
        counter++;
        processResponse(fetch(`api/books?x=${counter}&filter=${findTerm}`))
    }
    });
    document.getElementById("prev").addEventListener("click", () =>{
        if(counter != 0){
        counter--;
        processResponse(fetch(`api/books?x=${counter}&filter=${findTerm}`))
        }
    });

    document.getElementById("author").addEventListener("click", () =>{
        processResponse(fetch(`api/books?sortby=author&filter=${findTerm}`))
        counter = 0;
        sortValue = "author"
    });

    document.getElementById("title").addEventListener("click", () =>{
        processResponse(fetch(`api/books?sortby=title&filter=${findTerm}`))
        counter = 0;
        sortValue = "title"
    });

    document.getElementById("search").addEventListener("click", () =>{
        const searchTerm = document.getElementById("searchTerm").value;
        findTerm = searchTerm;
        processResponse(fetch(`api/books?sortby=${sortValue}&filter=${findTerm}`));
        counter = 0;
    });
});


function processResponse(response) {
    let table = document.getElementById("books");
    let total = document.getElementById("total");

    response
        .then(data => data.json())
        .then(value => {
            ourRequesLength = value.books.length;
            let oldRows = document.getElementsByClassName("row");
            for (let index = oldRows.length-1; index >= 0; index--) {
                const row = oldRows[index];
                table.removeChild(row);
            }
            for (let index = 0; index < value.books.length-1; index++) {
                const book = value.books[index];
                const tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = book.author;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = book.title;
                tr.appendChild(td);
                tr.classList.add("row");
                table.appendChild(tr);
            }
            total.innerHTML = value.total;
        });
}