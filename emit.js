const EventEmitter=require('events');
const emitter=new EventEmitter();
for(let i = 1; i<= 11; i++){
    emitter.on('message',()=>{
        console.log('Listener ${i} executed');
    });
}
emitter.emit('message');