{
  const input = +process.argv[2];
  if (Number.isNaN(input)){
    process.exit();
  }

  for (let i = 1; i <= input; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }
}