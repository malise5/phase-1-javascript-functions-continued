// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`;

}
console.log(mondayWork("work from home"));


const wrapAdjective = function(style ="*"){
    return function (adjective = "special"){
        return `You are ${style}${adjective}${style}!`
    }
}
