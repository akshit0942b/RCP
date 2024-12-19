let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");

RandomChoice = () =>
{
    options = ["rock","paper","scissor"];
    randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

drawGame = () =>
{
   msg.textContent = "Game is drawn";
   msg.style.color = "white";
   msg.style.backgroundColor = "black";
}

showGame = (userWin) =>
{
   if(userWin)
   {
    msg.textContent = "You have won";
    msg.style.color = "white";
    msg.style.backgroundColor = "blue";
    userScore++;
    document.querySelector("#user_score").textContent = userScore;
   }
   else
   {
    msg.textContent = "You have lost";
    msg.style.color = "black";
    msg.style.backgroundColor = "red";
    compScore++;
    document.querySelector("#comp_score").textContent = compScore;
   }
}


playGame = (userChoice) =>
{
    compChoice = RandomChoice();
    userWin = true;
    if(compChoice === userChoice)
    {
        drawGame();
    }
    else
    {   
        if(compChoice === "rock")
        {
            userWin = userChoice === "paper" ? true : false;
        }
        else if(compChoice === "paper")
        {
            userWin = userChoice === "scissor" ? true : false;
        }
        else if(compChoice === "scissor")
        {
            userWin = userChoice === "rock" ? true : false;
        }    
    }   
        showGame(userWin);
    
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>
    {
        userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});






























