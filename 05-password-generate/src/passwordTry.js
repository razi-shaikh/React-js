const numString = '0123456789';
const symString = '!@#$%&*(){}[]:;,.?/*-+='
const alphaString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let passString = alphaString;
if(true){
    passString+=numString;
}
if (true) {
    passString+=symString;
}
// console.log(passString);
for(let i=0; i<8; i++){
    Math.floor(Math.random()*passString.length+1)
}