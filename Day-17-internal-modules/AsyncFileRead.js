const fsPromises=require("node:fs/promises");


const start=Date.now();
console.log("---start---",start);

async function myReadFile(){
    try{
    console.log("---Reading File---");
    const ans= await fsPromises.readFile("./dummy.txt", "utf-8");
    console.log("-->ans",ans);
    }catch(err){
        console.log("Error occurred in reading File:", err.message);
    }
}

myReadFile();

const end=Date.now();
console.log("---End---",end);