const input4 = +process.argv[2];
if (Number.isNaN(input4) || input4 <= 0){
    process.exit();
}

for (let i = 1; i <= input4; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else{
        console.log(i)
    }
}