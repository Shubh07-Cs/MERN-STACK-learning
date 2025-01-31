

const sum =( a, b)=>{
    console.log("Sum is: ");
    return a+b;
}

function mul( a, b){
    console.log("Multiply is: ");
    return a*b;
}

const container={
    sum:sum,
    mul:mul,
};

module.exports=container;


