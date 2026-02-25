// Write a function divide(a, b) that throws a custom error if b is 0. Use try-catch-finally and log appropriate messages.

class NotDivisbleError extends Error{
    constructor(message){
        super(message)
        this.name="NotDivisbleError";
    }
}
function divide(a,b){
    if(b===0){
        throw new NotDivisbleError("Cannot divide")
    }
    return a/b;
}
try{
    let result=divide(4,0);
    console.log(result);
}catch(error){
    console.log(error.name + ": " + error.message);
}finally{
    console.log("Done");
}