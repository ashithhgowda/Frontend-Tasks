// Create an object with a method getName(). Log this.name. Call it normally and by storing in a variable. Explain the difference.


//calling it normally
const user={
    name:"Ashith",
    getName:function(){
        console.log(this.name);
    }
}
user.getName();


//storing in a variable
let fn=user.getName;
fn();