const http = require("http");
const fs = require("fs");
const url = require("url");

// Creating a HTTP Server ->> Port 80

// const myServer = http.createServer((req, res) => {

//     // console.log("Server is Requesting");
//     // console.log(req.headers); // server ki additional information
//     // console.log(req);
    
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()} : ${req.url} New Req Received \n`

//     fs.appendFile("./log.txt",log,(err,data) => {
//         // res.end("Hello From Server");
//         switch(req.url){
//             case "/" : res.end("Home Page "); break
//             case "/about" : res.end("ABout Page"); break
//             case "/contact" : res.end("Contact Page"); break
//             default : res.end("404 Not Found")
//         }
//     });
// });

// creating a query parameters

// const myServer = http.createServer((req, res) => {

//     // console.log("Server is Requesting");
//     // console.log(req.headers); // server ki additional information
//     // console.log(req);
    
//     if(req.url === "/favicon.ico") return res.end();

//     const log = `${Date.now()} : ${req.url} New Req Received \n`
//     // parse query string ko true
//     const myUrl =  url.parse(req.url,true);
//     console.log(myUrl);
    

//     fs.appendFile("./log.txt",log,(err,data) => {
//         // res.end("Hello From Server");
//         switch(myUrl.pathname){

//             case "/" : 
//             res.end("Home Page "); 
//             break;
//             case "/about" : 
//             const username = myUrl.query.myname
//             res.end(`HI  ${username}`);
//             break;
//             case "/contact" :
//             res.end("Contact Page"); 
//             break;
//             case "/search" :
//             const search = myUrl.query.search_query;
//             res.end(`Hi your are searching ${search}`);
//             break;
//             default : res.end("404 Not Found")
//         }
//     });
// });

function handler(req,res){
     // console.log("Server is Requesting");
    // console.log(req.headers); // server ki additional information
    // console.log(req);
    
    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()} : ${req.url} : ${req.method} New Req Received \n`
    
    // parse querystring ko true kiya hai
    const myUrl =  url.parse(req.url,true);
    // console.log(myUrl);
    

    fs.appendFile("./log.txt",log,(err,data) => {
        // res.end("Hello From Server");
        switch(myUrl.pathname){

            case "/" : 
            if(req.method === "GET") {
                res.end("Home Page ");
            }
            break;

            case "/about" : 
            const username = myUrl.query.myname
            res.end(`HI  ${username}`);
            break;
            
            case "/contact" :
            res.end("Contact Page"); 
            break;
            
            case "/search" :
                const search = myUrl.query.search_query;
                res.end(`Hi your are searching ${search}`);
                break;
                default : res.end("404 Not Found")

            case "/signup" :
                if(req.method === "GET"){
                    res.end("THIS is a signup Form")
                }else if(req.method === "POST"){
                    //db query
                    res.end("Success")
                }
        }
    });
}

// creating a get post method
const myServer = http.createServer(handler);



myServer.listen(8000, ()=> console.log("Server is Started !"));

