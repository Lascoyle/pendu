//*******************HANGMAN REPRESENTATION CONTEXT*******************//

let canvas = document.getElementById("cnv");  /* On appelle, via la variable "canva", la balise HTML id "cnv" qui sera le réceptacle de l'environnement pour dessiner, c-à-d la toile */
let ctx = canvas.getContext("2d"); /* On déclare le contexte de dessin par la méthode getContext que l'on stocke dans la variable ctx */


function draw()
{
    switch(wrongCounter)
    {
        case 1:
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
            ctx.lineTo(390, 260);
            ctx.stroke(); 
            ctx.closePath(); 
            ctx.beginPath();
            ctx.moveTo(370, 75);
            ctx.lineTo(370, 105);
            ctx.stroke(); 
            ctx.closePath(); 
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.strokeStyle = " rgb(180, 130, 94)";
            ctx.moveTo(390, 250);
            ctx.lineTo(390, 270);
            ctx.stroke(); 
            ctx.closePath();
            break;
        case 2:
             /*Head*/
            ctx.beginPath();
            ctx.lineWidth = 44;
            ctx.strokeStyle = " rgb(179, 161, 187)";
            ctx.arc(380, 217, 22, 0, 2*Math.PI);
            ctx.stroke();
            ctx.closePath();  
            break;
        case 3:
            /*Tank Top*/
            ctx.beginPath();
            ctx.lineWidth = 52;
            ctx.strokeStyle = " rgb(27, 177, 139)";
            ctx.moveTo(390, 263);
            ctx.lineTo(380, 338);
            ctx.stroke(); 
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = 54;
            ctx.strokeStyle = " rgb(255, 203, 155)";
            ctx.lineTo(380, 335);
            ctx.lineTo(380, 350);
            ctx.stroke();
            ctx.closePath();
            break;    
        case 4: 
            /*Right Arm*/
            ctx.beginPath();
            ctx.lineWidth = 18;
            ctx.strokeStyle = " white";
            ctx.moveTo(370, 263);
            ctx.lineTo(333, 315);
            ctx.stroke();
            ctx.closePath();
            /*Right Hand*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(253, 193, 136)";
            ctx.moveTo(365, 278);
            ctx.lineTo(370, 260);
            ctx.stroke();
            ctx.closePath();
            break;
        case 5:
            /*Left Arm*/
            ctx.beginPath();
            ctx.lineWidth = 18;
            ctx.strokeStyle = " white";
            ctx.moveTo(408, 263);
            ctx.lineTo(430, 325);
            ctx.stroke();
            ctx.closePath();
            /*Left Hand*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(253, 193, 136)";
            ctx.moveTo(412, 275);
            ctx.lineTo(402, 260);
            ctx.stroke();
            ctx.closePath();
            break;
        case 6:    
            /*Trousers*/
            ctx.beginPath();
            ctx.lineWidth = 55;
            ctx.strokeStyle = " rgb(88, 109, 117)";
            ctx.moveTo(382, 339 );
            ctx.lineTo(378, 361);
            ctx.stroke();
            ctx.closePath();
            /*Right Leg*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(88, 109, 117)";
            ctx.moveTo(368, 349);
            ctx.lineTo(300, 357);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(88, 109, 117)";
            ctx.moveTo(311, 357);
            ctx.lineTo(320, 413);
            ctx.stroke();
            ctx.closePath();
            break;
        case 7:
            /*Left Leg*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(88, 109, 117)";
            ctx.moveTo(394, 354);
            ctx.lineTo(450, 395);
            ctx.stroke();
            ctx.closePath();  
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(88, 109, 117)";
            ctx.moveTo(436, 395);
            ctx.lineTo(415, 430);
            ctx.stroke();
            ctx.closePath();  
            break;
        case 8:
            /*Right Boots*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(0, 0, 0)";
            ctx.moveTo(332, 413);
            ctx.lineTo(295, 420);
            ctx.stroke();
            ctx.closePath();
            /*Right Boots*/
            ctx.beginPath();
            ctx.lineWidth = 22;
            ctx.strokeStyle = " rgb(0, 0, 0)";
            ctx.moveTo(400, 430);
            ctx.lineTo(430, 453);
            ctx.stroke();
            ctx.closePath();
            break;
        case 9:
            /*Face*/
            ctx.beginPath(); //Mouth
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "rgb(133, 65, 71)";
            ctx.moveTo(365, 250);
            ctx.lineTo(400, 245);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath(); //Right Eye
            ctx.strokeStyle = " rgb(109, 91, 117)";
            ctx.moveTo(345, 220);
            ctx.lineTo(370, 230);
            ctx.stroke();
            ctx.closePath(); 
            ctx.moveTo(350, 235);
            ctx.lineTo(368, 215);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath(); //Left Eye
            ctx.moveTo(410, 210);
            ctx.lineTo(385, 230);
            ctx.stroke();
            ctx.closePath();  
            ctx.beginPath();
            ctx.moveTo(410, 225);
            ctx.lineTo(382, 213);
            ctx.stroke();
            ctx.closePath();  
            ctx.beginPath(); //Tongue
            ctx.lineWidth = 2;
            ctx.strokeStyle = " rgb(179, 161, 187)";
            ctx.arc(380, 217, 22, 0, 2*Math.PI);
            ctx.stroke();
            ctx.closePath();           
    }
}



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
ctx.moveTo(70, 510); // Déplace le marqueur
ctx.lineTo(230, 510); // Trace
ctx.stroke(); // Stoppe le tracé
ctx.closePath(); // Relève le marqueur

/*Gallows*/
ctx.beginPath();
ctx.lineWidth = 25;
ctx.strokeStyle = " rgb(10, 10, 9)";
ctx.moveTo(120, 510);
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
ctx.moveTo(190, 510);
ctx.lineTo(100, 440);
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

              


//*******************HANGMAN ANIMATION CONTEXT*******************//

/*DOM targets*/
let jsPlay = document.getElementById("play");
let jsWordToFind = document.getElementById("wordtofind");
let jsKeyboard = document.getElementById("keyboard");
let jsLetters = document.getElementsByClassName("letter");
let jsGameMessage = document.getElementById("gamemessage");
let jsWrongLetters = document.getElementById("wrongletters");
console.log(jsWordToFind);

/*Counter*/
let wrongCounter = 0;

/*Array of words*/
let word = ["apoplexia", "suffocation", "stiffness", "corpse", "strangulation", "decomposition", "rotting","cadaver", "thanatos", "maggots", "annihilation", "carcass", "killed", "tragedy", "succumb", "fatal","suffered", "execution", "carnage", "demise","gallows","hangman" ];


//******/Initiate the game/******//

    /*Word random selection*/
    let randomWord = Math.floor(Math.random() * word.length); //random index select° in array "word"
    let chosenWord = word[randomWord]; //random selected index's value's inject° in "chosenWord variable"
    let underScore = ""; // empty string destined to receive letters turned to underscores
    console.log(chosenWord);

    /*Generate underscores related to the selected word*/
    function generateUnderscore() 
    {
        for (let i = 0; i < chosenWord.length; i++)//run the array refering to the selected word itself, run each word's letter
            {
                underScore = chosenWord.replace(/[a-z,A-Z]/g,"_");// replace each word's letter by a underscore, assign it to a new variable   
            }
        return underScore;
    }

    console.log(generateUnderscore());

    /*Inject underscore in DOM*/

    console.log(chosenWord);
    jsWordToFind.textContent = underScore; //push all the underscores into the "wordtofind" container


//******/Interpret player's keyboard entries/******//

String.prototype.replaceAt = function(index, replacement) // letter replacement function 
{
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length); // divide the word in two parts and push  
}



function getLetter(item)
{ 
    let found = false;
    for (let i = 0; i <= chosenWord.length; i++) //run letters array corresponding to chosenWord
        {
            if (item.textContent === chosenWord[i]) //if the letter clicked is correct  
                {
                    console.log(underScore[i]+ " | "+ chosenWord[i]);
                    jsWordToFind.textContent = jsWordToFind.textContent.replaceAt(i,chosenWord[i]) // use the letter replacement function to push the right letter, in the right place, in the word   
                    jsGameMessage.textContent = '\"Well played! Try another letter!\"'; // display positive retry message
                    jsGameMessage.style.color = "white"; // change font-color related to the winning message
                    jsGameMessage.style.background = "mediumseagreen"; // change background-color related to the winning message
                    item.style.color = "mediumseagreen"; // turn the button's letter to green
                    found = true;
                    buttonSound.play(); //play the button sound for each click
                }    
            
                
            if (jsWordToFind.textContent === chosenWord)
            {
                jsGameMessage.textContent = '\"YOU WIIIN!!! CONGRATULATIONS!!! OH YEEAAAAH!!!\"'
                jsGameMessage.style.color = "white"; // change font-color related to the winning message
                jsGameMessage.style.background = "mediumseagreen"; // change background-color related to the winning message
                jsGameMessage.style.fontSize = "2em"; // change font-size related to the winning message
                jsKeyboard.style.display = "none"; // make keyboard disappear at the end of the game
                jsWrongLetters.style.display = "none"; // make wrong letters disappear at the end of the game
                fanfareSound.play(); // BGM Play
                yeahSound.play();
                mainSong.pause();
            }
        }

 
    if (!found)
    {
        jsGameMessage.textContent = '\"Boouh!!! Try another letter!\"'; // display negative retry message
        jsGameMessage.style.color = "black"; // change font-color related to the losing message
        jsGameMessage.style.background = "crimson"; // change background-color related to the losing messag
        item.style.color = "crimson"; // turn the button letter to red
        wrongCounter++; // player's errors counter by incrementation
        draw(); // function related to the canvas which draw each part of the hangman when the player makes an error
        errorSound.play(); // BGM Play
    }

    if (wrongCounter==9) // condition fixing the maximal authorized errors and ending the game  
    {
        jsGameMessage.textContent = '\"YOU LOOOOSE!!! The word was ' + '\"'+ chosenWord +'\" \"' ; // display losing message
        jsGameMessage.style.color = "black"; // change font-color related to the losing message
        jsGameMessage.style.background = "crimson"; // change background-color related to the losing message
        jsGameMessage.style.fontSize = "2em"; // change font-size related to the losing message
        jsKeyboard.style.display = "none"; // make keyboard disappear at the end of the game
        jsWrongLetters.style.display = "none"; // make wrong letters disappear at the end of the game
        ropeSound.play(); // BGM Play
        strangledSound.play();
        finalSound.play(); // BGM Play
        mainSong.pause();
    }
}


//******/BGM Library******//

let buttonSound = new Audio (); // variable associated to an audio file
buttonSound.src = "sounds/button_click.mp3"; // file's target
let errorSound = new Audio ();
errorSound.src = "sounds/error.mp3"


let finalSound= new Audio ();
finalSound.src = "sounds/finalsound.mp3";
let ropeSound = new Audio ();
ropeSound.src = "sounds/rope.mp3";
let strangledSound = new Audio ();
strangledSound.src = "sounds/strangled.mp3"


let fanfareSound = new Audio ();
fanfareSound.src = "sounds/fanfare.mp3";
let yeahSound = new Audio ();
yeahSound.src = "sounds/yeah.mp3";


let mainSong= new Audio ();
mainSong.src = "sounds/mainsong.mp3";
mainSong.addEventListener('ended', function Loop() { // function made to loop the main song
    this.currentTime = 0;
    this.play();
}, false);
mainSong.play();

