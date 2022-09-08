// Player One
// 
// 
// 
let scorePlayerOne = document.getElementById("scorePlayerOne");
let namePlayerOne = document.getElementById("namePlayerOne");
let headOne = document.getElementById("headOne");
let legOne = document.getElementById("legOne");
let handOne = document.getElementById("handOne");
// Player Two
// 
// 
// 
let scoreplayerTwo = document.getElementById("scoreplayerTwo");
let nameplayerTwo = document.getElementById("nameplayerTwo");
let headTwo = document.getElementById("headTwo");
let legTwo = document.getElementById("legTwo");
let handTwo = document.getElementById("handTwo");
// More Var
// 
// 
// 
// Prompts
let namePone = prompt("Enter The Name Of The First Player");
let namePtwo = prompt("Enter The Name Of The Second Player");
let startScore = prompt("Enter The start score")
// 
// 
// 


//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////



// StartCoding
// 
// 
// 


function ChangeFirstName(){
    namePlayerOne.innerHTML = namePone;
}
function ChangeSecondName(){
   nameplayerTwo.innerHTML = namePtwo;
}
function startScorefun(){
   scorePlayerOne.innerHTML = startScore;
   scoreplayerTwo .innerHTML = startScore;
}


// 
// 
// 
// 
    function headOneFun(){
headOne.onclick = function(){
    scoreplayerTwo.innerHTML = scoreplayerTwo.innerHTML - 4;
    scorePlayerOne.innerHTML = +scorePlayerOne.innerHTML + 4;
   // loseANDwin();
    headOneFun();
headTwoFun();
legOneFun();
legTwoFun();
handOneFun();
handTwoFun();
}}
function headTwoFun(){
headTwo.onclick = function(){
    scorePlayerOne.innerHTML = scorePlayerOne.innerHTML - 4;
    scoreplayerTwo.innerHTML = +scoreplayerTwo.innerHTML + 4;
   // loseANDwin();
    headOneFun();
headTwoFun();
legOneFun();
legTwoFun();
handOneFun();
handTwoFun();
}}
// 
// 
// 
// 
function legOneFun(){
legOne.onclick = function(){
    scoreplayerTwo.innerHTML = scoreplayerTwo.innerHTML - 2;
    scorePlayerOne.innerHTML = +scorePlayerOne.innerHTML + 2;
  //  loseANDwin();
    headOneFun();
    headTwoFun();
    legOneFun();
    legTwoFun();
    handOneFun();
    handTwoFun();
}}
function legTwoFun(){
legTwo.onclick = function(){
    scorePlayerOne.innerHTML = scorePlayerOne.innerHTML - 2;
    scoreplayerTwo.innerHTML = +scoreplayerTwo.innerHTML + 2;
    // loseANDwin();
    headOneFun();
    headTwoFun();
    legOneFun();
    legTwoFun();
    handOneFun();
    handTwoFun();
}}
// 
// 
// 
// 
function handOneFun(){
handOne.onclick = function(){
    scoreplayerTwo.innerHTML = scoreplayerTwo.innerHTML - 1;
    scorePlayerOne.innerHTML = +scorePlayerOne.innerHTML + 1;
    // loseANDwin();
    headOneFun();
    headTwoFun();
    legOneFun();
    legTwoFun();
    handOneFun();
    handTwoFun();
}}
function handTwoFun(){
handTwo.onclick = function(){
    scorePlayerOne.innerHTML = scorePlayerOne.innerHTML - 1;
    scoreplayerTwo.innerHTML = +scoreplayerTwo.innerHTML + 1;
    // loseANDwin();
    headOneFun();
    headTwoFun();
    legOneFun();
    legTwoFun();
    handOneFun();
    handTwoFun();
}}

/////////////
/////////////
/////////////
/////////////

// function loseANDwin(){
//     if(scorePlayerOne = 0){
//         prompt(namePlayerOne.innerHTML + " " + "Is lose" + nameplayerTwo.innerHTML + " " + "is Win")
//     }else if(scoreplayerTwo = 0){
//         prompt(nameplayerTwo.innerHTML + " " + "Is lose" + namePlayerOne.innerHTML + " " + "is Win")
//     }else {
//         headOneFun();
//         headTwoFun();
//         legOneFun();
//         legTwoFun();
//         handOneFun();
//         handTwoFun();
//     }
// }

// 
// 
// 
// 
// 
// 
// FUN Run
ChangeFirstName();
ChangeSecondName();
startScorefun();
headOneFun();
headTwoFun();
legOneFun();
legTwoFun();
handOneFun();
handTwoFun();