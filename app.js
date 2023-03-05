const EventEmitter=require('events');

const CustomEvent=new EventEmitter();

CustomEvent.on('response', ()=>{
    console.log('data recieved ');
});

CustomEvent.on('response', ()=>{
    console.log('Some other logic ');
});

CustomEvent.emit('response');


// we can create multiple evnts with different logics and with same name

// but the order matter.. check which event happen first  and execute line by lineW