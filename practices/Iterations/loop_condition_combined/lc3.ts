{
  const args = process.argv.slice(2);
  for (const arg of args){
    const numValue = +arg;

    if (Number.isNaN(numValue)){
      console.log(`${arg} -> string`)
    }
    else {
      console.log(`${numValue} -> number`)
    }
  }
}