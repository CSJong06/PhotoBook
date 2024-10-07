let options = document.getElementById('options');

options.style.display = ("none");
function show(){ //this function changes the display of the choices
  if (options.style.display === "none") {
      options.style.display = "block";
  } 
  else {
    options.style.display = "none";
  }
}

function hide(){
  options.style.display = "none";
}


// grabs the like and dislike button based on id
var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

// click event to change button either green or red
btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

// click event to change button either green or red
btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

// grabs the like and dislike button based on id
var btn3 = document.querySelector('#green2');
var btn4 = document.querySelector('#red2');

// click event to change button either green or red
btn3.addEventListener('click', function() {
  
    if (btn4.classList.contains('red')) {
      btn4.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

// click event to change button either green or red
btn4.addEventListener('click', function() {
  
    if (btn3.classList.contains('green')) {
      btn3.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

// grabs the like and dislike button based on id
var btn5 = document.querySelector('#green3');
var btn6 = document.querySelector('#red3');

// click event to change button either green or red
btn5.addEventListener('click', function() {
  
    if (btn6.classList.contains('red')) {
      btn6.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

// click event to change button either green or red
btn6.addEventListener('click', function() {
  
    if (btn5.classList.contains('green')) {
      btn5.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

// grabs the Id of both the image and the hide button
const Hide = document.getElementById('hBtn');
const img = document.getElementById('img');

// click event to change the display to either show or none
Hide.addEventListener('click', event =>{
    
    if(img.style.display === "none"){
        img.style.display = "block";
        Hide.textContent = 'Hide';
    }

    else{
        img.style.display = "none";
    Hide.textContent = "Show";
    }
    
});

// grabs the Id of both the image and the hide button
const Hide2 = document.getElementById('hBtn2');
const img2 = document.getElementById('img2');

// click event to change the display to either show or none
Hide2.addEventListener('click', event =>{
    
    if(img2.style.display === "none"){
        img2.style.display = "block";
        Hide2.textContent = 'Hide';
    }

    else{
        img2.style.display = "none";
    Hide2.textContent = "Show";
    }
    
});

// grabs the Id of both the image and the hide button
const Hide3 = document.getElementById('hBtn3');
const img3 = document.getElementById('img3');

// click event to change the display to either show or none
Hide3.addEventListener('click', event =>{
    
    if(img3.style.display === "none"){
        img3.style.display = "block";
        Hide3.textContent = 'Hide';
    }

    else{
        img3.style.display = "none";
    Hide3.textContent = "Show";
    }
    
});

// grabs the id of image and then copies the src
function share1(){
    let copiedText = document.getElementById("img")
    navigator.clipboard.writeText(copiedText.src);
    alert("Copied link");
    
}

// grabs the id of image and then copies the src
function share2(){
    let copiedText = document.getElementById("img2")
    navigator.clipboard.writeText(copiedText.src);
    alert("Copied link"); 
}

// grabs the id of image and then copies the src
function share3(){
    let copiedText = document.getElementById("img2")
    navigator.clipboard.writeText(copiedText.src);
    alert("Copied link" );
}