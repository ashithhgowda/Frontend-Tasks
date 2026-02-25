// Write a program that prints numbers from 1 to 50. Print 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if divisible by both, otherwise print the number.

for(let x=1;x<=50;x++){
    console.log(x);
}

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
