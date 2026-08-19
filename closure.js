funtion outer(){
    let message = "Welcome to Node.js";
    funtion inner(){
        console.log(message);
    }
    return inner;
}
const callback=outer();
callback();