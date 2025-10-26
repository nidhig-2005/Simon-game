let gameseq=[];
let userseq=[];
let btns=["yellow","red","blue","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let startbtn=document.getElementById("startbtn");

startbtn.addEventListener("click",function(){
    if (started==false){
        console.log("game is started");
        started=true;
        startbtn.style.display="none";
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);

}

function checkans(idx){
    // console.log("curr level:",level)
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
     }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> Try again💪`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
              },1000);
        reset();
     }
}

function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    startbtn.style.display="block";
    startbtn.style.alignSelf="center";
    startbtn.innerText="Restart game"
}
