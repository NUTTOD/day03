const input3 = +process.argv[2];
if (Number.isNaN(input3)){
    process.exit();
}

for (let i = 0; i <= input3; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}