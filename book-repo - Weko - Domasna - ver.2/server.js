const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("/books", (req, res) => {
    let sortby = req.query["sortby"];
    let filter = req.query["filter"];
    let myCounter = parseInt(req.query["x"]);

    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }

        let books = JSON.parse(data);

        if (sortby) {
            if (sortby === "author") {
                books.sort((a, b) => a.author.localeCompare(b.author));
            } else if (sortby === "title") {
                books.sort((a, b) => a.title.localeCompare(b.title));
            }

        }

        if (filter) {
            filter = filter.toLowerCase();
            books = books.filter(book => book.author.toLowerCase().includes(filter) || book.title.toLowerCase().includes(filter) );

        }

        let result = {};

        if(myCounter)
        {
            if(myCounter === 1){
                result = {
                    books: books.slice(50, 101),
                    total: books.length
                }
            }
            else if(myCounter === 2){
                result = {
                    books: books.slice(100, 151),
                    total: books.length
                }
            }
            else{
                console.log("Page doesn't exist. Returned to first page")
                result = {
                    books: books.slice(0, 51),
                    total: books.length}
            }
        }
        else{
            result = {
                books: books.slice(0, 51),
                total: books.length}

        }

        res.send(JSON.stringify(result));
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})