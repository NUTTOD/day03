console.log(1)

try {
  JSON.parse("Error")
  console.log("JSON is valid")
} catch (e) {
  console.log("Error")
}

console.log(2)