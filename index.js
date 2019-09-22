//*******************HANGMAN REPRESENTATION CONTEXT*******************//

let canvas = document.getElementById("cnv");  /* On appelle, via la variable "canva", la balise HTML id "cnv" qui sera le réceptacle de l'environnement pour dessiner, c-à-d la toile */
let ctx = canvas.getContext("2d"); /* On déclare le contexte de dessin par la méthode getContext que l'on stocke dans la variable ctx */

/*Ground*/
ctx.beginPath(); // Pose le marqueur sur la toile
ctx.lineWidth = 130; // Définis l'épaisseur du trait 
ctx.strokeStyle = "rgb(140, 180, 94)"; // Définis la couleur
ctx.moveTo(0, 510); // Déplace le marqueur
ctx.lineTo(550, 510) // Trace
ctx.stroke(); // Stoppe le tracé
ctx.closePath(); // Relève le marqueur

/*Gallows Base*/
ctx.beginPath(); // Pose le marqueur sur la toile
ctx.lineWidth = 25; // Définis l'épaisseur du trait 
ctx.strokeStyle = "rgb(10, 10, 9)"; // Définis la couleur
ctx.moveTo(70, 480); // Déplace le marqueur
ctx.lineTo(230, 480); // Trace
ctx.stroke(); // Stoppe le tracé
ctx.closePath(); // Relève le marqueur

/*Gallows*/
ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = " rgb(10, 10, 9)";
ctx.moveTo(120, 480);
ctx.lineTo(120, 70);
ctx.stroke(); 
ctx.closePath(); 

/*Beam*/
ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = " rgb(10, 10, 9)";
ctx.moveTo(70, 90);
ctx.lineTo(420, 90);
ctx.stroke(); 
ctx.closePath(); 

/*Lining Bottom*/
ctx.beginPath();
ctx.lineWidth = 15;
ctx.strokeStyle = " rgb(10, 10, 9)";
ctx.moveTo(190, 480);
ctx.lineTo(100, 420);
ctx.stroke(); 
ctx.closePath(); 

/*Lining Top*/
ctx.beginPath();
ctx.lineWidth = 15;
ctx.strokeStyle = " rgb(10, 10, 9)";
ctx.moveTo(240, 90);
ctx.lineTo(100, 160);
ctx.stroke(); 
ctx.closePath(); 

/*Rope*/
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = " rgb(180, 130, 94)";
ctx.moveTo(385, 75);
ctx.lineTo(385, 105);
ctx.stroke(); 
ctx.closePath(); 
ctx.beginPath();
ctx.moveTo(390, 75);
ctx.lineTo(390, 205);
ctx.stroke(); 
ctx.closePath(); 
ctx.beginPath();
ctx.moveTo(370, 75);
ctx.lineTo(370, 105);
ctx.stroke(); 
ctx.closePath(); 

/*Right Arm*/
ctx.beginPath();
ctx.lineWidth = 18;
ctx.strokeStyle = " rgb(253, 193, 136)";
ctx.moveTo(353, 263);
ctx.lineTo(370, 338);
ctx.stroke();
ctx.closePath();

/*Tank Top*/
ctx.beginPath();
ctx.lineWidth = 55;
ctx.strokeStyle = " rgb(27, 177, 139)";
ctx.moveTo(390, 260);
ctx.lineTo(380, 338);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth = 56;
ctx.strokeStyle = " rgb(255, 203, 155)";
ctx.lineTo(380, 335);
ctx.lineTo(380, 350);
ctx.stroke();
ctx.closePath();

/*Left Arm*/
ctx.beginPath();
ctx.lineWidth = 18;
ctx.strokeStyle = " rgb(253, 193, 136)";
ctx.moveTo(408, 263);
ctx.lineTo(430, 355);
ctx.stroke();
ctx.closePath();

/*Hand*/
ctx.beginPath();
ctx.lineWidth = 18;
ctx.strokeStyle = " rgb(253, 193, 136)";
ctx.moveTo(430, 355);
ctx.lineTo(455, 375);
ctx.stroke();
ctx.closePath();

/*Right Leg*/
ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = " rgb(253, 193, 136)";
ctx.moveTo(366, 348);
ctx.lineTo(340, 430);
ctx.stroke();
ctx.closePath();

/*Left Leg*/
ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = " rgb(253, 193, 136)";
ctx.moveTo(394, 348);
ctx.lineTo(390, 440);
ctx.stroke();
ctx.closePath();

/*Socks*/
ctx.beginPath();
ctx.lineWidth = 33;
ctx.strokeStyle = " navajowhite";
ctx.moveTo(387, 435);
ctx.lineTo(385, 455);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineTo(340, 428);
ctx.lineTo(338, 450);
ctx.stroke();
ctx.closePath();

/*Trunks*/
ctx.beginPath();
ctx.lineWidth = 56;
ctx.strokeStyle = " rgb(253, 252, 191)";
ctx.moveTo(380, 340);
ctx.lineTo(378, 357);
ctx.stroke();
ctx.closePath();

/*Head*/
ctx.beginPath();
ctx.lineWidth = 44;
ctx.strokeStyle = " rgb(179, 161, 187)";
ctx.arc(380, 225, 22, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();



//*******************HANGMAN ANIMATION CONTEXT*******************//

/*DOM targets*/
let jsPlay = document.getElementById("play");
let jsWordToFind = document.getElementById("wordtofind");
let jsLetters = document.getElementsByClassName("letter");
let jsGameMessage = document.getElementById("gamemessage");
console.log(jsWordToFind);
/*Array of words*/
let word = ["Apoplexia", "Suffocation", "Stiffness", "Corpse", "Strangulation",            "Decomposition", "Rotting"];

/*Array of messages*/
let message = ["Try Again", "You Win", "You Loose"];

/*Initiate the game*/


/*Word random selection*/
let randomWord = Math.floor(Math.random() * word.length); //random index select°
let chosenWord = word[randomWord]; //random index inject°
let underScore = ""; //recept° array for each underscore
console.log(chosenWord);

/*Create underscores related to the selected word*/
function generateUnderscore() 
{
    for (let i = 0; i < chosenWord.length; i++)
        {
            underScore = chosenWord.replace(/[a-z,A-Z]/g,"_");
            
        }
    return underScore;
}
console.log(generateUnderscore());

/*Inject underscore in the DOM*/

jsWordToFind.textContent = underScore;


/*Get letter associated to each button when player clicks on a button*/
let chosenLetter
function getLetter()//tofix
{
    jsLetters.textContent = chosenLetter;
    return chosenLetter;
}
jsLetters.addEventListener("click", getLetter());

/*Check if selection is right*/

/*If it's right display letter instead the right underscore*/
if (chosenLetter === underScore[""])[

]

/*Affichage des lettres*/

/*If wrong display letter in the "wrongletters" area*/
let wrongLetter = []; //recept° array for each wrong letter 

let generateWrongletter = () => 
{
    //express condition
        wrongLetter.push("");
        
        return wrongLetter;
}

    
