// function add(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return b-a;
// }

// module.exports=add;
// module.exports=subtract; this is not write syntax because it overwrite the upper values

// module.exports={
//     addFn : add,
//     subFn : subtract,
// }

// module.exports={
//     add,
//     subtract,
// }

exports.add1 = (a,b) => a+b;
exports.sub1 = (a,b) => b-a;