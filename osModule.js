const os=require('os');
// info about current user
// const user=os.userInfo();
// console.log(os.userInfo());


// // method reuturn the uptimein secnd

// console.log(`The System Uptime is ${os.uptime()}`)


const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}


console.log(currentos);