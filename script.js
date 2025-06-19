let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let h2 = document.querySelector('h2');
let allbtns = document.querySelectorAll(".box");

const startbt = document.querySelector('#Start');
startbt.addEventListener('click',function(){
    if(started === false){
        started = true;
        console.log('Game start');
        levelup();
    }

})

function check(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`GAME OVER YOUR SCORE IS <b>${level}</b> <br> Click Start for New Game`;
        reset();
    }
}

function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}

let btn = ["red",'Yellow',"green",'Purple'];
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let rndmindx = Math.floor(Math.random()*4);
    let rndmclr = btn[rndmindx];
    let rndmbtn = document.querySelector(`#${rndmclr}`);
    gameseq.push(rndmclr);
    console.log(gameseq);
    gameflash(rndmbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userflash(btn){
    btn.classList.add("usflash");
    setTimeout(function(){
        btn.classList.remove("usflash");
    },300);
}

for(let btn of allbtns){
    btn.addEventListener('click',pressbtn);
}

function pressbtn(){
    let btn = this;
    let btnclr = btn.getAttribute("id");
    userflash(btn);
    userseq.push(btnclr);
    // console.log(userseq);
    check(userseq.length-1);

}