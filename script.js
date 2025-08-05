// let userScore=document.querySelector("#user-score");
// let compScore=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const decision=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        console.log("you lost");
        msg.innerText="You Lose"
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}
const draw=()=>{
    console.log("game is draw");
    msg.innerText="Game Is Draw";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rndIdx=Math.floor(Math.random()*3);
    return options[rndIdx];
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?true:false;
        }
        else{
            userWin= compChoice==="rock"?false:true;
        }
        decision(userWin);
    }
    
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})