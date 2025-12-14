{
  const tempInput = +process.argv[2];
  if (Number.isNaN(tempInput)){
    process.exit();
  }
  if (tempInput > 30){
    console.log("Hot");
  }
  else{
    console.log("Normal");
  }
}