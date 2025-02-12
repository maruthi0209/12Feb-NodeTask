let obj = {
    "name": "maruthi",
    "bike": "honda cd unicorn 150"
}

let http = require("http");
const { json } = require("stream/consumers");
let server = http.createServer((req, res) => {
    console.log(req.method);
    if (req.method == "GET") {
        fetch("https://fakestoreapi.com/products").then((response) => {
            // 
            return response.json()
        }).then(
            (data) => {
console.log("dgdg");
console.log(data);
// res.write(JSON.stringify(data));
res.end(JSON.stringify(data))

            })

    } else if (req.method == "POST") {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            res.write(JSON.stringify(data));
            res.end();
        });
        
    } else {
        res.write("Sorry try get or post method")
        res.end()
    }

    // res.end();
});

let port = 3000;
server.listen(port, () => {
    console.log("server is now running")
})