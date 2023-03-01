const person={
       name:'max',
       age:29,
       greet(){console.log("HI I am "+ this.name)}
};

const printName=({name,age})=>{
       console.log(name,age);
}

printName(person);

const {name,age} =person;

const hobbies=['Sports','Cooking'];

const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)