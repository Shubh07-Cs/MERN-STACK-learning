const fs=require("node:fs");

const start=Date.now();
console.log("---start---",start);

function myReadFile(){
    console.log("---Reading File---");
    const ans= fs.readFileSync("./dummy.txt", "utf-8");
    console.log("---File Reading Done---");
    console.log("----------ans------------\n",ans);
}

myReadFile();

const end=Date.now();
console.log("---End---",end);