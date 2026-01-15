import { error } from "console";

{
  function checkScore(input: number){
    if (input < 0 || input > 100) {
      const error = new Error("scoreoutofrange");
      error.name = "outofrange";
      throw error
    }
  }

  try{
    checkScore(120);
  } catch(e:any){
    if (e.name === "outofrange") {
      console.log(`Error: ${e.message}`);
    }
  }
}