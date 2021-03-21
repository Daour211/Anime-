alert('Welcome to the Top Anime Website'); 

var question1 = 'Who is your favourite character in one piece, luffy or zoro?';

alert(question1);

var answer1 = prompt("your answer");

// Making a loop to get the answer for the question either zoro or luffy 

while ( answer1 !== 'luffy' && answer1 !== 'zoro'){
  answer1 = prompt('your answer must be either luffy or zoro' ) 
}
if (answer1 === 'luffy') {

    document.write('<img src="https://i.pinimg.com/474x/47/e2/3e/47e23ef9f58145646746b7e911b79c00.jpg"/> <br>')

} else if (answer1 === 'zoro') {
    document.write('<img src="https://mangathrill.com/wp-content/uploads/2020/12/daaaqweasdasdaqweasdasd.jpg"/ , width= 350> <br>')
}

var question2 = 'Who is your favourite character in Naruto, naruto or sasuke?';

alert(question2);

var answer2 = prompt("your answer");

while ( answer2 !== 'naruto' && answer2!== 'sasuke') {
  answer2 = prompt("your answer must be either naruto or sasuke")
}
if (answer2 === 'naruto'){

    document.write('<img src="https://64.media.tumblr.com/cb22e5c2e2cdd57bc1c66012aa0db077/tumblr_pjznxwjt3w1wnec3vo1_250.gifv"/>')
    
} else if (answer2 === 'sasuke') {

    document.write('<img src="https://animesouls.com/wp-content/uploads/2017/03/14.jpg"/>')
}

var question3 = 'Who you wish to be his/her name written in the Death Note?';

alert(question3);

var answer3 = prompt("your answer");

document.write('<h3> you can say: May he/she rest in peace </h3>');
 
// Asking for Death Note posters

var dnPoster = '';
var numberOfdn = prompt("How many posters you want to buy for Death Note?");

for (var i = 1;i<=numberOfdn;i++){
  dnPoster = dnPoster + '<img src= "https://cdn.europosters.eu/image/750/posters/death-note-duo-i28405.jpg"/> ' + i+ '<br>' ; 
}

document.write(dnPoster);

var txt;
var r = confirm("Do you wish to know what will happen in the next episode of One Piece!");
if (r == true) {
  txt = "You need to go and read the manga!";
} else {
  txt = "Then you shall wait!";
}
document.write('<br> <p> ' + txt + ' </p> </br> ');
