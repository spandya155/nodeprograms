var add=(a1,a2)=>
{
    return a1+a2
}

var sub=(a1,a2)=>
{
    return a1-a2
}

var mul=(a1,a2)=>
{
    return a1*a2
}

var div=(a1,a2)=>
{
    return a1/a2
}
module.exports={add,sub,mul,div}
var file =require('./p3.js')

console.log("Addition is : ",file.add(10,20))
console.log("Subtraction is :",file.sub(10,20))
console.log("Multiplication is :",file.mul(10,20))
console.log("division is :",file.div(10,20))