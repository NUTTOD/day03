{
  const greet = (name?: string): void => {
    if (typeof name === "string"){
      console.log(`Hello ${name}`);
    }
    else {
      console.log("Hello Guest");
    }
  }
  greet("Nut");
  greet();
}