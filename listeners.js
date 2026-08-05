const EventEmitter =require("events");
const EventEmitter = new EventEmitter();
eventEmitter.on("login",()=>{
    console.log("Checking Username....");
});
eventEmitter.on("login",()=>{
    console.log("Checking Password....");
});
eventEmitter.on("login",()=>{
    console.log("Login successfully.")
});
eventEmitter.on("login");
