{
  const input = +process.argv[2];
  if (Number.isNaN(input) || !Number.isInteger(input) || input < 0){
    process.exit();
  }

  let result: number = 1;
  for (let i = input; i > 0; i--){
    result *= i;
  }
  console.log(result);
}