//Async code

const fetchData=()=>{

       const promise=new Promise((reslove,reject)=>{
              setTimeout(()=>{
                     reslove('DOne me !');
              },1500);
       });
       return promise;

       setTimeout(()=>{
              callback('Done!');
       },1500);
}

setTimeout(()=>{
       console.log("Timer is donne");
       fetchData(text=>{
              console.log(text);
       });
       
},2000);

console.log('Hello!');
console.log("hii");