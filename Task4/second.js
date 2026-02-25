// Create a Promise that resolves with 'Success' after 2 seconds and rejects with 'Failed' if success is false. Use then, catch, finally.


let result=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    },2000);
});

result
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
}).finally(()=>{
    console.log("Completed the Task");
})