function SimpleTimeout(consoletimer)
{
    consoletimer(consoletimer);
}
console.time("two seconds");
setTimeout(SimpleTimeout,2000,"two seconds");
console.time("one second")
setTimeout(SimpleTimeout,1000,"one second");
console.time("five seconds")
setTimeout(SimpleTimeout,5000,"five seconds");
console.time("50M seconds")
setTimeout(SimpleTimeout,50,"50M seconds");