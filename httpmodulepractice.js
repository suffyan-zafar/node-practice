// synchronous run simultaneously. fisrt it can complete 1st task then goto the next task
// asynchronous run parallel task. First it can the task 1 without completing this btask it can goto run second task and vice versa



const http= require('http');

const server=http.createServer((req,res)=>{
    //console.log(req);
    if(req.url=='/'){
        res.end("Hello from server");

    }
    else if(req.url=='/about'){
     
        res.end("Hello from about page contetnt");

    }else{
        res.write(`<h1>OOPS!</h1>
        <p>We cant see the page</p>
        <a href="/">Back Home</a>
        `);
        res.end();
    }


});


server.listen(5000);