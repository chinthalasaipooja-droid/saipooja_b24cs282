var studentStr='{"name":"pooja","age":20, \
"courses":["Node.js","MongoDB"], \
"rollno":101,"college":"KITSW"}';
var studentObj = JSON.parse(studentStr);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.courses);
console.log(studentObj.rollno);
console.log(studentObj.college);
