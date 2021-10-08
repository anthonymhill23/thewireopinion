'use strict'
let userName = prompt('Please enter your name!');
console.log('here')
let userAnswer = prompt('Have you seen the wire?');
let url = '';
if (userAnswer == 'yes') {
     url = 'https://c.tenor.com/PpDIJg9rTjUAAAAC/wire-the-bunk-oh-indeed.gif';

} if (userAnswer == 'no') {

     url = 'https://c.tenor.com/b0kAsOeq9mcAAAAC/stringer-bell-atef.gif'

}
document.write('<img id="walkoff"  src= "' + url + '">')


function wireappreciationgame() {
     console.log('Iamhere')
     let url = 'https://media4.giphy.com/media/IBFjeoZ5Oewhi/200.gif'
     let correctAnswer = 5;
     let attempts = 3;
     let count = 1

     let userAnswer = prompt('What would you rate the wire? 1-5 stars?');
     console.log(userAnswer)
     while (userAnswer < 1 || userAnswer > 5) {
          userAnswer = prompt('Please enter a number between 1 and 5 ONLY')


     }
     if (userAnswer >= 1 && userAnswer <= 5) {
          for (let i = 0; i < userAnswer; i++) {
               document.write('<img src = "https://media4.giphy.com/media/IBFjeoZ5Oewhi/200.gif"/> ')
          }
     }



}


     // if(userAnswer == correctAnswer){
     // alert('A man gotta have a code and you cracked it');
     // break;}
     // else  { alert ('nah'); count ++ }


     // }if (count > 3) 
     // alert('The game is the game and you just lost!')

     // }


