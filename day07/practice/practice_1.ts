import { error } from "console";

{
  function validateUsername (input: string){
    if (!input) {
      const err = new Error("username cannot be empty")
      err.name = "Error"
      throw err
    }
  }

  try {
    validateUsername("")
  } catch (e:any) {
    if (e.name === "Error"){
      console.error(`${e.name}: ${e.message}`)
    }
  }
}