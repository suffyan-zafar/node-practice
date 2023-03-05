console.log(" First Executions");


// setTimeout(()=>{      //set timeout is asynchronous
//     console.log("inner executions")
// },100);

setInterval(()=>{
console.log("inner executions");
},2000);

console.log(" Last Executions");
