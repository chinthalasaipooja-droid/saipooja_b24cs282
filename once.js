const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.once("start",()=>{
    console.log("Application started");});
eventEmitter.emit("start");
eventEmitter.emit("start");
