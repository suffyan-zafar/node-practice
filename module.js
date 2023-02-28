// use for split codes in modules.
//common js : Every File is module (by default)
//Module : Encapsulated Code (only share minimum );
// const suffyan="Suffyan";
// const Ali="Ali";

const names=require('./utills');
const sayHi=require('./function');
console.log(names);
// const sayHi=(name)=>{
//         console.log(`my name is ${name}`);
// }



 sayHi("suffyan");

 sayHi(names.Ali);

 sayHi(names.Fahad);

 console.log(names.person);