const userOn=document.getElementById('userOn');
const userSe=document.getElementById('userSe');
const userTh=document.getElementById('userTh');
const userFo=document.getElementById('userFo');
const userFi=document.getElementById('userFi');
const userSi=document.getElementById('userSi');
const userSev=document.getElementById('userSev');
const userEi=document.getElementById('userEi');
const userNi=document.getElementById('userNi');
const userTe=document.getElementById('userTe');
const userEl=document.getElementById('userEl');
const userTw=document.getElementById('userTw');

const leftOneDot=document.getElementById('leftOneDot');
const leftTwoDots=document.getElementById('leftTwoDots');
const leftThreeDots=document.getElementById('leftThreeDots');
const leftFourDots=document.getElementById('leftFourDots');
const leftFiveDots=document.getElementById('leftFiveDots');
const leftSixDots=document.getElementById('leftSixDots');
const rightOneDot=document.getElementById('rightOneDot');
const rightTwoDots=document.getElementById('rightTwoDots');
const rightThreeDots=document.getElementById('rightThreeDots');
const rightFourDots=document.getElementById('rightFourDots');
const rightFiveDots=document.getElementById('rightFiveDots');
const rightSixDots=document.getElementById('rightSixDots');

const diceTotal=document.getElementById('diceTotal');

const turnPc=document.getElementById('turnPc');
const turnUser=document.getElementById('turnUser');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }

let rightDieRandom=getRandomInt(1,7);
let leftDieRandom=getRandomInt(1,7);
let pcValue=getRandomInt(1,13);
let pcTypeGame=getRandomInt(1,3);
let whoStart=getRandomInt(1,3);

// Functions show dots in the right die
const oneDotRF=()=>{
  rightOneDot.style.opacity="1";
}

const twoDotsRF=()=>{
  rightTwoDots.style.opacity="1";
}

const threeDotsRF=()=>{
  rightThreeDots.style.opacity="1";
}

const fourDotsRF=()=>{
  rightFourDots.style.opacity="1";
}

const fiveDotsRF=()=>{
  rightFiveDots.style.opacity="1";
}

const sixDotsRF=()=>{
  rightSixDots.style.opacity="1";
}

// Functions hide dots in the right die
const oneDotRN=()=>{
  rightOneDot.style.opacity="0";
}

const twoDotsRN=()=>{
  rightTwoDots.style.opacity="0";
}

const threeDotsRN=()=>{
  rightThreeDots.style.opacity="0";
}

const fourDotsRN=()=>{
  rightFourDots.style.opacity="0";
}

const fiveDotsRN=()=>{
  rightFiveDots.style.opacity="0";
}

const sixDotsRN=()=>{
  rightSixDots.style.opacity="0";
}

// Functions show dots in the left die

const oneDotLF=()=>{
  leftOneDot.style.opacity="1";
}

const twoDotsLF=()=>{
  leftTwoDots.style.opacity="1";
}

const threeDotsLF=()=>{
  leftThreeDots.style.opacity="1";
}

const fourDotsLF=()=>{
  leftFourDots.style.opacity="1";
}

const fiveDotsLF=()=>{
  leftFiveDots.style.opacity="1";
}

const sixDotsLF=()=>{
  leftSixDots.style.opacity="1";
}

// Functions hide dots in the left die

const oneDotLN=()=>{
  leftOneDot.style.opacity="0";
}

const twoDotsLN=()=>{
  leftTwoDots.style.opacity="0";
}

const threeDotsLN=()=>{
  leftThreeDots.style.opacity="0";
}

const fourDotsLN=()=>{
  leftFourDots.style.opacity="0";
}

const fiveDotsLN=()=>{
  leftFiveDots.style.opacity="0";
}

const sixDotsLN=()=>{
  leftSixDots.style.opacity="0";
}

/**********************************/

//

const showRightDots=(rightDieRandom)=>{
  switch (rightDieRandom) {
    case 1:
      oneDotRF();
      twoDotsRN();
      threeDotsRN();
      fourDotsRN();
      fiveDotsRN();
      sixDotsRN();

      break;
    case 2:
      oneDotRF();
      twoDotsRN();
      threeDotsRN();
      fourDotsRN();
      fiveDotsRN();
      sixDotsRF();

      break;
    case 3:
      oneDotRF();
      twoDotsRF();
      threeDotsRN();
      fourDotsRN();
      fiveDotsRF();
      sixDotsRN(); 
      
    break;
    case 4:
      oneDotRF();
      twoDotsRF();
      threeDotsRN();
      fourDotsRN();
      fiveDotsRF();
      sixDotsRF(); 

      break;
    case 5:
      oneDotRF();
      twoDotsRF();
      threeDotsRF();
      fourDotsRN();
      fiveDotsRF();
      sixDotsRF(); 
      break;
    case 6:
      oneDotRF();
      twoDotsRF();
      threeDotsRF();
      fourDotsRF();
      fiveDotsRF();
      sixDotsRF(); 
  
      break;
    default:
      break;
  }
}

//

const showLeftDots=(leftDieRandom)=>{
  switch (leftDieRandom) {
    case 1:
      oneDotLF();
      twoDotsLN();
      threeDotsLN();
      fourDotsLN();
      fiveDotsLN();
      sixDotsLN();

      break;
    case 2:
      oneDotLF();
      twoDotsLN();
      threeDotsLN();
      fourDotsLN();
      fiveDotsLN();
      sixDotsLF();

      break;
    case 3:
      oneDotLF();
      twoDotsLF();
      threeDotsLN();
      fourDotsLN();
      fiveDotsLF();
      sixDotsLN(); 
      
    break;
    case 4:
      oneDotLF();
      twoDotsLF();
      threeDotsLN();
      fourDotsLN();
      fiveDotsLF();
      sixDotsLF(); 

      break;
    case 5:
      oneDotLF();
      twoDotsLF();
      threeDotsLF();
      fourDotsLN();
      fiveDotsLF();
      sixDotsLF(); 
      break;
    case 6:
      oneDotLF();
      twoDotsLF();
      threeDotsLF();
      fourDotsLF();
      fiveDotsLF();
      sixDotsLF(); 
  
      break;
    default:
      break;
  }
}
diceTotal.addEventListener('click',()=>{
  leftDieRandom=getRandomInt(1,7);
  rightDieRandom=getRandomInt(1,7);
  showRightDots(rightDieRandom);
  showLeftDots(leftDieRandom);
})

console.log(rightDieRandom);
console.log(leftDieRandom);
console.log(pcValue);

let userValue;
userOn.addEventListener('click',()=>{
  userValue=1;
  console.log(userValue);
  console.log('si funciona')
})

userSe.addEventListener('click',()=>{
    userValue=2;
  })

userTh.addEventListener('click',()=>{
    userValue=3;
  })

userFo.addEventListener('click',()=>{
    userValue=4;
  })

userFi.addEventListener('click',()=>{
    userValue=5;
  })

userSi.addEventListener('click',()=>{
    userValue=6;
  })

userSev.addEventListener('click',()=>{
    userValue=7;
  })

userEi.addEventListener('click',()=>{
    userValue=8;
  })

userNi.addEventListener('click',()=>{
    userValue=9;
  })

userTe.addEventListener('click',()=>{
    userValue=10;
  })

userEl.addEventListener('click',()=>{
    userValue=11;
  })

userTw.addEventListener('click',()=>{
    userValue=12;
  })

function sum(rightDieRandom,leftDieRandom){
    value=rightDieRandom+leftDieRandom;
    return lessThanTwelve(value);
}
function subtraction(rightDieRandom,number2) {
    value=Math.abs(rightDieRandom-leftDieRandom);
    return lessThanTwelve(value);
}
function multiplication(rightDieRandom,leftDieRandom) {
    value=rightDieRandom*leftDieRandom
    return lessThanTwelve(value);
}
function lessThanTwelve(value){
if (value<=12) {
    return value   
}else{
    return 0;
}

}
function chosenNumber(rightDieRandom,leftDieRandom,userValue){
    switch (userValue) {
        case rightDieRandom:
        return userValue
            break;
        case leftDieRandom:
        return userValue
            break;
        case sum(rightDieRandom,leftDieRandom):
        return userValue 
            break;
        case subtraction(rightDieRandom,leftDieRandom):
        return userValue
            break;
        case multiplication(rightDieRandom,leftDieRandom):
        return userValue
            break;
        default:
        console.log("Nothing")
            break;
    }
}

if (whoStart==1) {
  turnPc.style.opacity='0';
  turnUser.style.opacity='1';
} else {
  turnPc.style.opacity='1';
  turnUser.style.opacity='0';
}

const pcChoice=()=>{
    const automaticChoice=[rightDieRandom,leftDieRandom,sum(rightDieRandom,leftDieRandom),subtraction(rightDieRandom,leftDieRandom),multiplication(rightDieRandom,leftDieRandom)]
}

console.log(chosenNumber(rightDieRandom,leftDieRandom,userValue));