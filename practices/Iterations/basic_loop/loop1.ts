const input2 = +process.argv[2];
if (Number.isNaN(input2)){
    process.exit()
}
for (let i = 1; i <= input2; i++){
    console.log(i);
}