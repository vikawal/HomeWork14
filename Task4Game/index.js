//Task 1 Game (details in style sheet)


const getUserChoice = (userInput) => {
  userInput = prompt ('What do you choose: rock, scissors or paper?'); 
  userInput = userInput.toLowerCase(); 
  //if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "bomb") {
//return userInput;
if (userInput == "rock") {
    document.getElementById("pic5Rock").style.display = 'block';
    return userInput;
} 
else if (userInput == "paper") {
    document.getElementById("pic6Paper").style.display = 'block';
    return userInput;
} 
else if (userInput == "scissors") {
    document.getElementById("pic7Scissors").style.display = 'block';
    return userInput;
} 
else if (userInput == "bomb") {
    document.getElementById("pic8Bomb").style.display = 'block';
    return userInput;
} 
else {
    document.getElementById("img9Oops").style.display = 'block';
    alert ('ERROR, you can choose only between paper rock and scissors');
    //throw new Error ("ERROR");  
} 
} 

//console.log (getUserChoice());

let getComputerChoice = () => {
    let anyNumber = Math.floor(Math.random() * 3);
    //alert (anyNumber);
 
    if (anyNumber == 0) {
        document.getElementById("pic5Rock1").style.display = 'block';
        return "rock";
        
    }
    else if (anyNumber == 1) {
        document.getElementById("pic7Scissors1").style.display = 'block';
        return "scissors";
    }
    else if (anyNumber == 2) {
        document.getElementById("pic6Paper1").style.display = 'block';
        return "paper";
        
    }
    else {
        return "Fuck, it works)))";
    }
}

//console.log (getComputerChoice());


let determineWinner = (userChoice, computerChoice) => {
        //console.log(`getUserChoice = "${getUserChoice}"; userChoice = "${userChoice}"`);
        
        if (userChoice === computerChoice) {
            document.getElementById("img1Tie").style.display = 'block';
  return "The game was a tie";
   }   
 else if (userChoice === "rock") {
    if (computerChoice === "paper") {
        document.getElementById("img2Comp").style.display = 'block';
        return "Computer WON!";
    }
    else {
        document.getElementById("img3You").style.display = 'block';
        return "You WON!";
    }   
}

 else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
        document.getElementById("img2Comp").style.display = 'block';
        return "Computer WON!";
    }
    else { 
        document.getElementById("img3You").style.display = 'block';
        return "You WON!";
    }
}

 else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
        document.getElementById("img2Comp").style.display = 'block';
        return "Computer WON!";
    }
    else {
        document.getElementById("img3You").style.display = 'block';
        return "You WON!"; 
    }
}  
else if (userChoice === "bomb") {
    document.getElementById("img4Cheat").style.display = 'block';
    return "You WON, small cheater!";
   
}
}  


//console.log (determineWinner('paper', 'scissors'));
let resertPreviousGame = () => {
    document.getElementById("pic5Rock").style.display = 'none';
    document.getElementById("pic6Paper").style.display = 'none';
    document.getElementById("pic7Scissors").style.display = 'none';
    document.getElementById("pic8Bomb").style.display = 'none';
    document.getElementById("img9Oops").style.display = 'none';
    document.getElementById("pic5Rock1").style.display = 'none';
    document.getElementById("pic7Scissors1").style.display = 'none';
    document.getElementById("pic6Paper1").style.display = 'none';
    document.getElementById("img1Tie").style.display = 'none';
    document.getElementById("img2Comp").style.display = 'none';
    document.getElementById("img3You").style.display = 'none';
    document.getElementById("img4Cheat").style.display = 'none';
}

let playGame = () => {
    resertPreviousGame();
    let userChoice = getUserChoice();
    //console.log (userChoice);
    let computerChoice = getComputerChoice();
    //console.log (computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    alert (determineWinner(userChoice, computerChoice));
    //console.log (determineWinner());
    
}
//console.log (determineWinner (userChoice, computerChoice));
//playGame();