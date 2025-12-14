const starSquare = +process.argv[2];
if (Number.isNaN(starSquare) || starSquare <= 0){
    process.exit();
}

let result = '';
for (let i = 1; i <= starSquare; i++){
    for (let j = 1; j <= starSquare; j++){
        result += '*';
    }
    console.log(result);
    result = ''
}