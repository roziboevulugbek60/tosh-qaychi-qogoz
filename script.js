let userScore = 0;
let computerScore = 0;


const choices = {
    tosh: "🪨",
    qaychi: "✂️",
    qogoz: "📄"
};



function play(user){

    let computer = randomChoice();


    document.getElementById("userChoice").innerHTML = choices[user];

    document.getElementById("computerChoice").innerHTML = choices[computer];


    let result = "";


    if(user === computer){

        result = "🤝 Durang!";

    }

    else if(

        (user === "tosh" && computer === "qaychi") ||
        (user === "qaychi" && computer === "qogoz") ||
        (user === "qogoz" && computer === "tosh")

    ){

        result = "🎉 Siz yutdingiz!";
        userScore++;

    }

    else{

        result = "😢 Kompyuter yutdi!";
        computerScore++;

    }


    document.getElementById("result").innerHTML = result;


    document.getElementById("userScore").innerHTML = userScore;

    document.getElementById("computerScore").innerHTML = computerScore;


}



function randomChoice(){

    let array = [
        "tosh",
        "qaychi",
        "qogoz"
    ];


    let random = Math.floor(Math.random()*3);


    return array[random];

}




function restart(){

    userScore = 0;
    computerScore = 0;


    document.getElementById("userScore").innerHTML = 0;

    document.getElementById("computerScore").innerHTML = 0;


    document.getElementById("userChoice").innerHTML = "❔";

    document.getElementById("computerChoice").innerHTML = "❔";


    document.getElementById("result").innerHTML = "Tanlang!";

}