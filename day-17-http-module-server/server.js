const http= require("node:http");

const server= http.createServer((req , res)=>{
    //res.end("Hello");
    console.log(typeof req);
    console.log(Object)
});

server.listen(1101, () =>{
    console.log("started");
});//guideline says 4 digit port number

