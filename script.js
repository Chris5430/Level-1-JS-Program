const button = document.getElementById('trybutton');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const clearbutton = document.getElementById('clearbutton');
const number = document.getElementById('number');
const randomNumber = Math.floor(Math.random()*3 + 1)*100 + Math.floor(Math.random()*3 + 1)*10 + Math.floor(Math.random()*3 + 1)
const turns = document.getElementById('turns');
var turnsAmount = turns.textContent.substring(parseInt(turns.textContent.length-1));
function clearNumber(){
    number.textContent = '000';
}

function add1(){
    const index = number.textContent.indexOf('0');
   if(index != -1 && number.textContent.length < 4){
   
        number.textContent = number.textContent.substring(0,index) + '1' + number.textContent.substring(index+1);
    
   }
}

function add2(){
    const index = number.textContent.indexOf('0');
    if(index != -1 && number.textContent.length < 4){
    
        number.textContent = number.textContent.substring(0,index) + '2' + number.textContent.substring(index+1);
     
    }
}

function add3(){
    const index = number.textContent.indexOf('0');
    if(index != -1 && number.textContent.length < 4){
    
        number.textContent = number.textContent.substring(0,index) + '3' + number.textContent.substring(index+1);
     
    }
}

function tryNumber(){
    if(turnsAmount > 0){
        const guess = document.createElement('p');
        guess.textContent = number.textContent;
        document.body.appendChild(guess);
        if(parseInt(number.textContent) > randomNumber){
        guess.textContent = guess.textContent + " Too High";
        }else if(parseInt(number.textContent) < randomNumber){
            guess.textContent = guess.textContent + " Too Low";
        }else{
            guess.textContent = guess.textContent + " Correct";
        }
        turnsAmount--;
         turns.textContent = "Turns: " + turnsAmount;
    }else{
        turns.textContent = "You failed";
    }
    clearNumber();
}

button.addEventListener('click',tryNumber);
button1.addEventListener('click',add1);
button2.addEventListener('click',add2);
button3.addEventListener('click',add3);
clearbutton.addEventListener('click',clearNumber);