const button = document.getElementById('trybutton');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const clearbutton = document.getElementById('clearbutton');
const number = document.getElementById('number');
const randomNumber = Math.floor(Math.random()*3 + 1)*100 + Math.floor(Math.random()*3 + 1)*10 + Math.floor(Math.random()*3 + 1)
function clearNumber(){
    number.textContent = '0';
}

function add1(){
    const index = number.textContent.indexOf('0');
   if(index != -1 && number.textContent.length < 4){
   
        number.textContent = number.textContent.substring(0,index) + '1';
    
   }
}

function add2(){
    const index = number.textContent.indexOf('0');
    if(index != -1 && number.textContent.length < 4){
    
         number.textContent = number.textContent.substring(0,index) + '2';
     
    }
}

function add3(){
    const index = number.textContent.indexOf('0');
    if(index != -1 && number.textContent.length < 4){
    
         number.textContent = number.textContent.substring(0,index) + '3';
     
    }
}

function tryNumber(){

}

button.addEventListener('click',tryNumber);
button1.addEventListener('click',add1);
button2.addEventListener('click',add2);
button3.addEventListener('click',add3);
clearbutton.addEventListener('click',tryNumber);