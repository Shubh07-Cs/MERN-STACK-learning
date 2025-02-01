const fs=require("node:fs");

const ans= fs.readFileSync("./dummy.txt", {encoding: "utf-8"});
//is actually hexadecimal equivalent of the binary data---(6*16^1+1*16^0)=97-->a
//(console )
console.log(ans);

//if you store a file and don't give extension.---> OS :: does understand what do.... it will ask you, what is the type.
//But everything on hardDisk is binary