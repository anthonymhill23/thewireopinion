let userName = prompt('Please enter your name!');
console.log(userName)
let userAnswer = prompt('Have you seen the wire?');
if (userAnswer == 'yes'){
    let url = 'https://c.tenor.com/PpDIJg9rTjUAAAAC/wire-the-bunk-oh-indeed.gif';
    document.write( '<img id="indeed"  src= "' + url +'">')
}

if (userAnswer == 'no'){

let url = 'https://c.tenor.com/b0kAsOeq9mcAAAAC/stringer-bell-atef.gif'
document.write( '<img id="walkoff"  src= "' + url +'">')
}




    
    
