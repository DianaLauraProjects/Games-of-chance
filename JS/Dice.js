const OneDot=document.getElementById('OneDot')
//This code is an example of the logic programming that would be included in the project about gambling games of dice

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

let number1=getRandomInt(1,7);
let number2=getRandomInt(1,7);
let userValue=getRandomInt(1,13);

console.log(number1);
console.log(number2);
console.log(userValue);

function sum(number1,number2){
    value=number1+number2
    return lessThanTwelve(value);
}
function subtraction(number1,number2) {
    value=Math.abs(number1-number2)
    return lessThanTwelve(value);
}
function multiplication(number1,number2) {
    value=number1*number2
    return lessThanTwelve(value);
}
function lessThanTwelve(value){
if (value<=12) {
    return value   
}else{
    return 0;
}

}
function chosenNumber(number1,number2,userValue){
    switch (userValue) {
        case number1:
        return userValue
            break;
        case number2:
        return userValue
            break;
        case sum(number1,number2):
        return userValue 
            break;
        case subtraction(number1,number2):
        return userValue
            break;
        case multiplication(number1,number2):
        return userValue
            break;
        default:
        console.log("Nothing")
            break;
    }
}

console.log(chosenNumber(number1,number2,userValue))