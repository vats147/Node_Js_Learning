

const hobbies=['Sports','Cooking',1,true];


const copiedArray=[...hobbies];

console.log(copiedArray);

const toArray=(...args)=>{
       return args;
}

console.log(toArray(1,2,3,5));