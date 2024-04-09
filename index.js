// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return  (`This Saturday, I want to ${activity}!`)
}
console.log(saturdayFun());

function mondayWork(activity = 'go to the office') {
return (`This Monday, I will ${activity}.`)

}


function wrapAdjective(emphasis) {
    return function(adjective) {
        return `You are ${emphasis}${adjective}${emphasis}!`
    };
}
const result = wrapAdjective('*');
const emphatic = result('a hard worker');