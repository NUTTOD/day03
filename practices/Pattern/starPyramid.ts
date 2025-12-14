const starPyramid = +process.argv[2];
if (Number.isNaN(starPyramid) || starPyramid <= 0){
    process.exit();
}

let result1 = '';
for (let i = 1; i <= starPyramid; i++){
    result1 += '*';
    console.log(result1);
}