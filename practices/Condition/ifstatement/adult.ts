{
  const ageInput = +process.argv[2];
  if (Number.isNaN(ageInput)){
    process.exit();
  }
  if (ageInput >= 18){
    console.log("Adult");
  }
  else{
    console.log("Minor");
  }
}