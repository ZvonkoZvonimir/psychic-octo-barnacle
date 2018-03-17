const fs = require("fs");

const params = process.argv.slice(2);


const inputFile = params[0] || "books.json";

fs.readFile(inputFile, {encoding: "utf-8"}, (err, data)=>{
    if (err) {
        console.log(`Error Happened: ${err}`);
        return;
    }

    const books = JSON.parse(data);
    
    const result = {
        
        totalCount: books.map(book => book.author).filter((n, i, arr) => {
            if (arr.indexOf(n) === i) {
              return n
            }
          }).sort(function(a, b){
            return b.length - a.length;
          })
    }

    fs.writeFile("authors.json", JSON.stringify(result, null, 2), (err)=>{ 
        if (err) {
            console.log(`Error Happened: ${err}`);
        } else {
            console.log(`Successfully writen count.json`);
        }
    })
});