{
  interface User {
    name: string
    age: number
  }

  function display(user: User){
    console.log(`Username: ${user.name}`);
    console.log(`Age: ${user.age} year old`);
  }

  const myuser: User = {
    name: "koko",
    age: 23
  }

  display(myuser);
}