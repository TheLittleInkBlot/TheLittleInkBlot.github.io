//---menu system code
// 
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page5btn=document.querySelector("#page5btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}
function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
page5btn.addEventListener("click", function () {
    show(5);
});
hideall();

//--------------moth code-------------//
const durianId = document.querySelector("#durianId");
function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
const BoxOScores = document.querySelector("#BoxOScores");
const motharea = document.querySelector("#motharea");
// console.log (motharea);
// const rect = motharea.getBoundingClientRect();
// console.log(rect);
//     const width = rect.width;
//     const height = rect.height;
var durianx = 0;
var duriany = 0;
function MoveDurian() {
    durianx = GetRandom(0, (motharea.offsetWidth));
    if (durianx > 250) {
        durianx = 250;
    }
    duriany = GetRandom(0, (motharea.offsetHeight));
    if (duriany > 250) {
        duriany = 250;
    }
    durianId.style.left = durianx + "px";
    durianId.style.top = duriany + "px";
}
setInterval(MoveDurian, 1000);
const btnSubmit=document.querySelector("#btnSubmit");
const popAudio = new Audio("audio/sky-honk-whale.mp3");
//create an new Audio Object using sound file
var points = 0; //to track how many clicks
function durianCatch() {
    //increases score after clicking
    points++;
    //update html scorebox
    BoxOScores.innerHTML = "Score: " + points;
    popAudio.play(); //play the audio!
}
//link durian to mouseclick to durianCatch function
durianId.addEventListener("click", durianCatch);

/*------------Quiz Code---------------*/

btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,q5,q6,score=0;
function CheckAns(){
    score=0; //reset score to 0, check ans and give score if correct
    //read the value of the selected radio button for q1
    q1=document.querySelector("input[name='q1']:checked").value;
    console.log(q1); //check q1 value retrieved
    if(q1=="Cocoon")score++;
    //read the value of the selected radio button for q2
    q2=document.querySelector("input[name='q2']:checked").value;
    console.log(q2); //check q2 value retrieved
    if(q2=="Death's-Head Hawkmoth")score++;
    q3=document.querySelector("input[name='q3']:checked").value;
    console.log(q3); //check q3 value retrieved
    if(q3=="AURORA")score++;
    q4=document.querySelector("input[name='q4']:checked").value;
    console.log(q4); //check q4 value retrieved
    if(q4=="Monarch")score++;
    q5=document.querySelector("input[name='q5']:checked").value;
    console.log(q5); //check q5 value retrieved
    if(q5=="Antagonist")score++;
    q6=document.querySelector("input[name='q6']:checked").value;
    console.log(q6); //check q6 value retrieved
    if(q6=="Demons")score++;
    scorebox.innerHTML="Trust: "+score;
}