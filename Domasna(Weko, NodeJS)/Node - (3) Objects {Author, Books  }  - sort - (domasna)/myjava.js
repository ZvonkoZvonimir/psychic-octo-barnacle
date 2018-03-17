const fs = require("fs");

const params = process.argv.slice(2);


const inputFile = params[0] || "books.json";

fs.readFile(inputFile, {encoding: "utf-8"}, (err, data)=>{
    if (err) {
        console.log(`Error Happened: ${err}`);
        return;
    }


    const books = JSON.parse(data);

    const a_books = books.map(book => book.author).sort(function(a, b){
        return b.length - a.length;
      })
  
    //===================================================================================
    function ObjectsAuthorsBooks(original) {
 
        var compressed = [];
        var copy = original.slice(0);
       
        for (var i = 0; i < original.length; i++) {
     
            var myCount = 0;	
            for (var w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    myCount++;
                    delete copy[w];
                }
            }
     
            if (myCount > 0) {
                var a = new Object();
                a.author = original[i];
                a.books = myCount;
                compressed.push(a);
            }
        }
        return compressed;
    };
  
    var authors_books_array = ObjectsAuthorsBooks(a_books);

    //===================================================================================
    
    const result = {
        
        totalCount: authors_books_array

    }

    fs.writeFile("authors.json", JSON.stringify(result, null, 2), (err)=>{ 
        if (err) {
            console.log(`Error Happened: ${err}`);
        } else {
            console.log(`Successfully writen count.json`);
        }
    })
});