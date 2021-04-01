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

const pcOn=document.getElementById('pcOn');
const pcSe=document.getElementById('pcSe');
const pcTh=document.getElementById('pcTh');
const pcFo=document.getElementById('pcFo');
const pcFi=document.getElementById('pcFi');
const pcSi=document.getElementById('pcSi');
const pcSev=document.getElementById('pcSev');
const pcEi=document.getElementById('pcEi');
const pcNi=document.getElementById('pcNi');
const pcTe=document.getElementById('pcTe');
const pcEl=document.getElementById('pcEl');
const pcTw=document.getElementById('pcTw');

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

const start=document.getElementById('start');

const turnPc=document.getElementById('turnPc');
const turnUser=document.getElementById('turnUser');

const scoreUser=document.getElementById('scoreUser');
const scorePc=document.getElementById('scorePc');

/******************** */
start.addEventListener('click',()=>{
  start.style.display="none"

let CardsTotal=[pcOn,pcSe,pcTh,pcFo,pcFi,pcSi,pcSev,pcEi,pcNi,pcTe,pcEl,pcTw]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let CompletedNumbersPC=[0,0,0,0,0,0,0,0,0,0,0,0];
let CompletedNumbersUser=[0,0,0,0,0,0,0,0,0,0,0,0];
let pointsUser=0;
let pointsPc=0;
let rightDieRandom=getRandomInt(1,7);
let leftDieRandom=getRandomInt(1,7);
let whoStart=getRandomInt(0,2);//whit 0 PC start and with 1 User start.
const startValue=whoStart;
let pcValue=getRandomInt(1,13);//easy mode
let pcTypeGame=1//getRandomInt(1,3);//hard mode
let userValue;
let userWinner=0;
let pcWinner=0;
let runUser=0;

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
  diceTotal.style.animation="animation1";
  diceTotal.style.animationDuration=".8s";
  leftDieRandom=getRandomInt(1,7);
  rightDieRandom=getRandomInt(1,7);
  showRightDots(rightDieRandom);
  showLeftDots(leftDieRandom);
})

userOn.addEventListener('click',()=>{
  userValue=1;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    CompletedNumbersUser.splice(0,1,1);
    let i=0;
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    userOn.style.background="green";
    if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
  } 
  }else{ if(runUser==0&startValue==1){
        whoStart=whoStart+1
        whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc);
    turnTaking(whoStart);
    //¿Porque no se estan contando los puntos del PC?
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userSe.addEventListener('click',()=>{
    userValue=2;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    CompletedNumbersUser.splice(1,1,2);
    let i=0;
    CompletedNumbersUser.forEach((data,index)=>{ if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
    userSe.style.background="green"
    scoreUser.textContent=pointsUser;
    console.log(CompletedNumbersUser)
    console.log(pointsUser)
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  } else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userTh.addEventListener('click',()=>{
    userValue=3;
    if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
      let i=0;
      CompletedNumbersUser.splice(2,1,3);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
      userTh.style.background="green"
      scoreUser.textContent=pointsUser;
      pointsUser=pointsUser+100;
      if(runUser==0&startValue==1){
        whoStart=whoStart+1
        whoStart=whoStart%2}
      if (pointsUser>=1200) {
        console.log("User ha ganado")
        return scoreUser.textContent="Winner";
      }
    }else{if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userFo.addEventListener('click',()=>{
    userValue=4;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    let i=0;
      CompletedNumbersUser.splice(3,1,4);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    console.log(chosenNumber(rightDieRandom,leftDieRandom,userValue));
    userFo.style.background="green"
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

  userFi.addEventListener('click',()=>{
    userValue=5;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    console.log(chosenNumber(rightDieRandom,leftDieRandom,userValue));
    userFi.style.background="green"
    let i=0;
      CompletedNumbersUser.splice(4,1,5);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userSi.addEventListener('click',()=>{
    userValue=6;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    let i=0;
      CompletedNumbersUser.splice(5,1,6);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    userSi.style.background="green"
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
  pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
  turnTaking(whoStart)
  runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

  userSev.addEventListener('click',()=>{
    userValue=7;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    let i=0;
      CompletedNumbersUser.splice(6,1,7);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} ) 
    userSev.style.background="green"
    scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
  pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
  turnTaking(whoStart)
  runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userEi.addEventListener('click',()=>{
    userValue=8;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    userEi.style.background="green"
      let i=0;
      CompletedNumbersUser.splice(7,1,8);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userNi.addEventListener('click',()=>{
    userValue=9;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    userNi.style.background="green"
    let i=0;
    CompletedNumbersUser.splice(8,1,9);
    CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
    scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
   
    pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
    turnTaking(whoStart)
    runUser=runUser+1;
    return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userTe.addEventListener('click',()=>{
    userValue=10;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    userTe.style.background="green"
    let i=0;
    CompletedNumbersUser.splice(9,1,10);
    CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
    scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
  
  pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
  turnTaking(whoStart)
  runUser=runUser+1;
  return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

userEl.addEventListener('click',()=>{
    userValue=11;
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    userEl.style.background="green"
    let i=0;
      CompletedNumbersUser.splice(10,1,11);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}

  pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
  turnTaking(whoStart)
  runUser=runUser+1;
  return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser;
  })

userTw.addEventListener('click',()=>{
    userValue=12;
 
  if (chosenNumber(rightDieRandom,leftDieRandom,userValue)==userValue) {
    userTw.style.background="green"
    let i=0;
      CompletedNumbersUser.splice(11,1,12);
      CompletedNumbersUser.forEach((data,index)=>{if (data!=0){i=i+1};pointsUser=i*100; return pointsUser} )
      scoreUser.textContent=pointsUser;
    if(runUser==0&startValue==1){
      whoStart=whoStart+1
      whoStart=whoStart%2}
    if (pointsUser>=1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
    } 
  }else{if(runUser==0&startValue==1){
    whoStart=whoStart+1
    whoStart=whoStart%2}}
  
  pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
  turnTaking(whoStart)
  runUser=runUser+1;
  return whoStart,pointsUser,CompletedNumbersPC,CardsTotal,pointsPc,runUser,CompletedNumbersUser;
  })

function sum(rightDieRandom,leftDieRandom){
    value=rightDieRandom+leftDieRandom;
    return lessThanTwelve(value);
}
function subtraction(rightDieRandom,leftDieRandom) {
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

function turnTaking(whoStart){
if (whoStart==1) {
  turnPc.style.opacity='0';
  turnUser.style.opacity='1';
} else {
  turnPc.style.opacity='1';
  turnUser.style.opacity='0';
}
}

const randomGamePC=(pcTypeGame)=>{
  if (pcTypeGame==2) {
}
}

function pcPlay(rightDieRandom,leftDieRandom,CompletedNumbersPC,CardsTotal,pointsPc){
  switch (0) {

    case CompletedNumbersPC[sum(rightDieRandom,leftDieRandom)-1]:
        CardsTotal[sum(rightDieRandom,leftDieRandom)-1].style.background="green";
        CompletedNumbersPC.splice(sum(rightDieRandom,leftDieRandom)-1,1,sum(rightDieRandom,leftDieRandom));
        return CompletedNumbersPC;
        break;
  
    case CompletedNumbersPC[multiplication(rightDieRandom,leftDieRandom)-1]:
        CardsTotal[multiplication(rightDieRandom,leftDieRandom)-1].style.background="green";
        CompletedNumbersPC.splice(multiplication(rightDieRandom,leftDieRandom)-1,1,multiplication(rightDieRandom,leftDieRandom))
        return CompletedNumbersPC;
        break;
  
    case CompletedNumbersPC[leftDieRandom-1]:
        CardsTotal[leftDieRandom-1].style.background="green";
        pointsPc=pointsPc+100;
        return CompletedNumbersPC.splice(leftDieRandom-1,1,leftDieRandom),pointsPc;
        break;
  
    case CompletedNumbersPC[rightDieRandom-1]:
        CardsTotal[rightDieRandom-1].style.background="green";
        pointsPc=pointsPc+100;
        return CompletedNumbersPC.splice(rightDieRandom-1,1,rightDieRandom),pointsPc;
        break;
    case CompletedNumbersPC[subtraction(rightDieRandom,leftDieRandom)-1]: 
        if (rightDieRandom!=leftDieRandom){
        CardsTotal[subtraction(rightDieRandom,leftDieRandom)-1].style.background="green";
        CompletedNumbersPC.splice(subtraction(rightDieRandom,leftDieRandom)-1,1,subtraction(rightDieRandom,leftDieRandom))
        return CompletedNumbersPC;
      }
        break;
    default:
      //caso en el que ya se han cumplido todas las opciones,(ya no hay opciones), retornar que el usuario continue con el turno 
      break;
      
  }
}


function scoreOfUser(pointsUser) {
  pointsUser=pointsUser+100;
  scoreUser.textContent=pointsUser;
  if (pointsUser==1200) {
      console.log("User ha ganado")
      return scoreUser.textContent="Winner";
  } 
  return pointsUse;
}

function scoreOfPc(pointsPc) { 
  pointsPc=pointsPc+100;
  scorePc.textContent=pointsPc;
  if (pointsPc==1200) {
      console.log("la PC ha ganado")
      scorePc.textContent="Winner";
      return 0;
  }
  console.log(pointsPc)
  return pointsPc;
}

function pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc){
  if (whoStart==0){
    diceTotal.style.borderColor="transparent"
    whoStart=whoStart+1
    whoStart=whoStart%2
    diceTotal.style.animation="animation1";
    diceTotal.style.animationDuration=".8s";
    leftDieRandom=getRandomInt(1,7);
    rightDieRandom=getRandomInt(1,7);
    showRightDots(rightDieRandom);
    showLeftDots(leftDieRandom);
    setTimeout(() => {
    pcPlay(rightDieRandom,leftDieRandom,CompletedNumbersPC,CardsTotal,pointsPc);
    CompletedNumbersPC.forEach((data,index)=>{if (data!=0){pointsPc=pointsPc+100} return pointsPc} )
    scorePc.textContent=pointsPc;
        if (pointsPc==1200) {
        console.log("la PC ha ganado")
        scorePc.textContent="Winner";}
    turnTaking(whoStart);
    diceTotal.style.borderColor="green"
    diceTotal.style.borderWidth="4px"
    return pointsPc
  },2000);
  return CompletedNumbersPC,CardsTotal,pointsPc;
}}

turnTaking(whoStart);
pcPlayTurn(whoStart,CompletedNumbersPC,CardsTotal,pointsPc)
console.log(whoStart);
console.log(pointsPc);
return whoStart,CompletedNumbersPC,1,rightDieRandom,leftDieRandom,pointsPc

})