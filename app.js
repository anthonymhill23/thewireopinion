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

let url = 'https://media4.giphy.com/media/IBFjeoZ5Oewhi/200.gif'
let correctAnswer = 1;
let attempts = 3;
let count = 1
// loop through attempt
// as you loop through attempts, declare user answer prompts
// check if user answer is correct, if not correct, continue
// if correct, continue logic
for(let i = 1; i <= attempts; i++){
 let userAnswer = prompt ('How many times must you watch the wire all the way through to finally get the greatness of it? 1-5 times');
if(userAnswer == correctAnswer){
alert('A man gotta have a code and you cracked it');
break;}
else  { alert ('nah'); count ++ }


}if (count > 3) 
alert('The game is the game and you just lost!')

}
  






wireappreciationgame();









