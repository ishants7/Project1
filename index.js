const fs=require("fs")

const http = require("http")

const PORT = 2000;
const hostname = "localhost";

//here raed files one by one
const home=fs.readFileSync("./index.html","utf-8")

// console.log(__filename);

const server = http.createServer((req, res) => {
     if (req.url === "/") {
       return res.end(home);  //inspite of <h1> here direct class="home" in html file
    }
if (req.url === "/about") {
   return res.end("<h1>ABOUT PAGE</h1>");
}

    if (req.url === "/contact") {
       return res.end("<h1>CONTACT Page</h1>");
    }
    if (req.url === "/service") {
     return  res.end("<h1>SERVICE PAGE</h1>");
    }
   else{
       return res.end("<h1>404 PAGE NHI MILA</h1>");
    }
}

);
server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`)
})

//to deploy/hoisting this website on render