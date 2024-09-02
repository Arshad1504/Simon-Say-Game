let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btnId = ["id1","id2","id3","id4"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
});

function levelup(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randclss = btnId[randIndx];
    let randBtn = document.querySelector(`.${randclss}`);
    gameSeq.push(randclss);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

// waiting for user to press any button

let allBtns = document.querySelectorAll("button");

for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function btnPress(){
    let btnPressed = this;
    userFlash(btnPressed);
    userId = btnPressed.getAttribute("id");
    // console.log(userId
    userSeq.push(userId);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}



function checkAns(indx){
    if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML=`Game Over ! Your Score is <b>${level - 1}<b> <br> Press any key to restart`;
        gameOverFlash();
        restart();
    }
}

function gameOverFlash(){
    let mainBody = document.querySelector(".mainBody");
    mainBody.classList.add("gameOver");
    setTimeout(function(){
        mainBody.classList.remove("gameOver");
    },100);
}

function restart(){
    let gameSeq = [];
    let userSeq = [];
    let started = false;
    let level = 0;
}



