let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore=document.querySelector("#uscore");
const cScore=document.querySelector("#cscore");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userchoice,compchoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cScore.innerText=compScore;
        msg.innerText = `You Loose. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    const compchoice=genCompchoice();
    
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
           userWin = compchoice==="paper" ? false:true;
        }else if(userchoice==="paper"){
            userWin = compchoice==="scissors" ? false:true;
        }else{
            userWin = compchoice==="rock" ? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
})
