let disclaimerText=document.getElementById("disclaimerText");
let beforeYouPlayText=document.getElementById("beforeYouPlayText");
//add shit to disclaimerText 
let add1="This game is the intellectual property of Bhavya Chand, Samaira Mukerjea and Aarish Khan.\nYou may not replicate, reuse, translate or republish our game without our written consent.\nAll places, names and characters appearing in this work are entirely fictional.\n Any resemblance to the real world is entirely coincidental. \nThe actions of the characters, the way they behave, speak or talk are not representative of our beliefs in any way."
let i=0;
//console.log(add1);


function trial(){
    if(i==add1.length) return;
    
    disclaimerText.innerText+=add1[i];
    i++;


}
    
    
setInterval(trial,40);

let add2="1. The best experience for this game will be on a laptop or pc. It is not recommended to use a handheld device as the device resolution will be odd. If you can make the switch, please do.\n2. Prompts have been littered throughout the game in the form of notifications. It is best to finish the current objective rather than going through unnecessary apps. The notifications are to ensure you play the game in the order it was intended to. \n3. If stuck while unlocking a device, there are going to be hints on the third wrong attempt. "
j=0;
function trial2(){
    if(j==add2.length)return;
    beforeYouPlayText.innerText+=add2[j];
    j++;
    
}
setInterval(trial2,40);

let button=document.getElementById("disclaimerButton");
button.addEventListener('click',function (){
    window.open("logIn.html","_self");
})