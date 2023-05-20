// variables
const happy = '&#128512' ;
const sad = '&#128532' ;
let emoji = document.getElementById("emoji") ;
let score = document.getElementById("score") ;
let num1 = document.getElementById("num1") ;
let num2 = document.getElementById("num2") ;
let input = document.getElementById("input") ;
let btn = document.getElementById("btn") ;
let soundTrack = document.getElementById("soundTrack");

// play the soundTrack
function autoPlay() {
    soundTrack.load;
    soundTrack.play();
}

// change the num1 and num2 randomly(between 1 and 10)
function setNum() {
    let n = Math.floor(Math.random()*10) + 1;
    let m = Math.floor(Math.random()*10) + 1;
    num1.innerText = n ;
    num2.innerText = m ;
}

// clear the input after submitting the answer
function clearInput() {
    input.value = '';
}

// compare the result and the given answer
function checkAnswer(){
    const result = parseInt(num1.innerText) * parseInt(num2.innerText) ;
    const value = parseInt(input.value);
    if (value === result){
        emoji.innerHTML = happy;
        score.innerText = parseInt(score.innerText) + 1;
    }else{
        emoji.innerHTML = sad;
        const audio = new Audio('./mix_02s (audio-joiner.com).mp3');
        audio.play();
        if (parseInt(score.innerText)>0){
            score.innerText = parseInt(score.innerText) - 1;
        };
    };
};

// main functions
setNum();
function submit(){
    checkAnswer();
    setNum();
    clearInput();
    autoPlay();
    input.focus();
}

// submit the answer when the submit button is clicked
btn.addEventListener('click', submit);

// submit the answer when the enter key is pressed
input.addEventListener('keydown',(e)=> {
    if (e.key == 'Enter') {
        submit()
    }
})
