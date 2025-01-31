

const sum =( a, b)=>{
    console.log("Sum is: ");
    return a+b;
}

function mul( a, b){
    console.log("Multiply is: ");
    return a*b;
}

array=[10,100,20];

const container={
    sum:sum,
    mul:mul,
    array,
};



module.exports=container;


