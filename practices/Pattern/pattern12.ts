{
    const input = +process.argv[2];
    if (Number.isNaN(input) || input <= 0){
        process.exit();
    }
    
    let resultpattern12 = ''
    for (let i = input; i > 0; i--){
        for (let j = i; j > 0; j--){
            resultpattern12 += j;
        }
        resultpattern12 += "\n";
    }
    console.log(resultpattern12)
}