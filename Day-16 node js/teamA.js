console.log("Hello");
// const box=require("./teamB")


// const ans1=box.sum(2,3);
// const ans2=box.mul(2,3);

const {sum, mul, array}=require("./teamB")

console.log(sum(2,3));
console.log(mul(2,3));

const sumArr=(array)=>{
    let total =0;
    for(let i=0;i<array.length;i++){
        total+=array[i];
    }
    return total;
}

console.log(sumArr(array));