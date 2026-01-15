import { error } from "console"
import { parse } from "path"

{
  function parseAge (age: string){
    const num = +age
    if (isNaN(num)){
      const err = new Error("invalid age format")
      err.name = "Error"
      throw err
    }
    return(num)
  }

  try{
    parseAge("asd")
  } catch (e:any) {
    if (e.name === "Error"){
      console.log(`${e.name}: ${e.message}`)
    }
  }
}