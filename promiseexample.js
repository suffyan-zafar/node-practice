const {readFile}= require('fs');


const getText=(path)=>{
    return new Promise((resolve,reject) =>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                console.log(data);
                resolve(data);
            }
    });
    

    });
};

getText('./content/first.txt').then((resolve)=>{
    console.log(resolve);
}).catch((err)=>{
    console.log(err);
});


