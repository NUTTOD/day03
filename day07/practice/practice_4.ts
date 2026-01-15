import { error } from "console";

function safeDivide(divided:number, divisor:number){
  if (divisor === 0) {
    const err = new Error("divisionby zero");
    err.name = "safeDivide";
    throw err
  }
  return divided;
}

try{
  safeDivide(20, 2);
} catch(e:any){
  if (e.name === "safeDivide") {
    console.log(`Error: ${e.message}`);
  } else {
    console.log(safeDivide(20, 2))
  }
}