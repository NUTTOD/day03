{
  const numberInput = +process.argv[2];
  if (Number.isNaN(numberInput)){
    process.exit();
  }
  if (numberInput > 0){
    console.log("Positive");
  }
  else if (numberInput < 0){
    console.log("Negative");
  }
  else{
    console.log("Zero");
  }
}