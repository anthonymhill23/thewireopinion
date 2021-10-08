'use strict'
let userName = prompt('Please enter your name!');
console.log('here')
let userAnswer = prompt('Have you seen the wire?');
let url = '';
if (userAnswer == 'yes'){
     url = 'https://c.tenor.com/PpDIJg9rTjUAAAAC/wire-the-bunk-oh-indeed.gif';
   
} if (userAnswer == 'no'){

     url = 'https://c.tenor.com/b0kAsOeq9mcAAAAC/stringer-bell-atef.gif'
    
}
document.write( '<img id="walkoff"  src= "' + url +'">')


function wireappreciationgame(){
let userAnswer = prompt ('How many times must you watch the wire all the way through to finally get the greatness of it?');
let url = 'https://media4.giphy.com/media/IBFjeoZ5Oewhi/200.gif'
let correctAnswer = 1;
let attempts = 3;

for(let i = 0; i < attempts; i++){
     console.log(i)
     while(userAnswer > 2 ){

          userAnswer = prompt ('Nah');
     }
if(userAnswer == correctAnswer){
     alert('A man gotta have a code and you cracked it!!');
     break;
}else if(userAnswer > correctAnswer && i !=3){

     alert('The game is the game,and you lost')
     break;

     } 
     }
}






wireappreciationgame();









