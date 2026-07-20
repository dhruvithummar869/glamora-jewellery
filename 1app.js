let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
   const randINX =  Math.floor(Math.random() * 3);
   return options[randINX];
};

const drawgame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "rgba(212 ,60 ,86 ,0.792)";
    
};

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    //generate computer choice -> modular
    const compchoice = gencompchoice();
    if(userchoice === compchoice) {
        // draw game
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors , paper
            compchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            // rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
} );