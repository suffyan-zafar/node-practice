

const data=[

    {name:'suffyan', age:10},
    {name:'Fahad', age:12},

];

const Calling=()=>{

    setTimeout(()=>{
        data.forEach((val,index)=>{
            console.log(val.name);
        })
    },1000);
}
const Calling2=(dat,calback)=>{

    setTimeout(()=>{
        data.push(dat);
        calback();
    },3000);
}

// Calling();
Calling2({name:'suffyan', age:10},Calling);

//console.log(data);