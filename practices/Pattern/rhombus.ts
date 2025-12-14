const rhombus = +process.argv[2];
if (Number.isNaN(rhombus) || rhombus <= 0){
    process.exit();
}

let result2 = '';
for (let i = 1; i <= rhombus; i++){
    for (let k = rhombus - i; k--;){
        result2 += ' ';
    }
    for (let j = 1; j <= rhombus; j++){
        result2 += '*';
    }
    console.log(result2);
    result2 = ''
}