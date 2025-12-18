const url="http://localhost:3001";


async function checkPassword(a,b){
    await fetch(`${url}/api/login`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"

        },
        body:JSON.stringify({email:a,password:b})
    }).then((res)=>res.text())
    .then((res)=>{
        console.log(res);
        if(res==="login successful."){
            window.open("deviceHub.html","_self");
        }else{
            let wrong=document.getElementById("display");
            wrong.innerText=res;
            document.getElementById("username").value="";
            document.getElementById("password").value="";

        }
        
    })
    
    

}


async function addPassword(a,b){
    await fetch(`${url}/api/signup`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"

        },
        body:JSON.stringify({email:a,password:b})
    }).then((res)=>res.text())
    .then((res)=>{
        if(res==="account made."){
            //html and css changes 

            document.getElementById("signUp").style.display="none";
            document.getElementById("signUpButton").style.display="none";
            //must show the logIn element and button
            document.getElementById("logIn").style.display="block";
            document.getElementById("logInButton").style.display="inline-block";

            //change text
            document.getElementById("text").innerText="log in";
            //change text2 tag ka inner html
            document.getElementById("text2").innerText="don't have an account? sign up";
            document.getElementById("display").innerText=res;

            

        }else{
            let wrong=document.getElementById("display");
            wrong.innerText=res;

        }
    })


    
    
}

//login thingy

let logIn=document.getElementById("logInButton");
logIn.addEventListener("click",function (){
    let user=document.getElementById("username").value;
    console.log(user);

    let pass=document.getElementById("password").value;
    console.log(pass);
    return checkPassword(user,pass);
});

//neutral ground ig?
document.getElementById("text2").addEventListener("click",function(){
    //if log in thing is active. make it into sign up 
    //if sign up is active. make it into log in 
    if(document.getElementById("logIn").style.display=="none"){
        //therefore we must hide the signUp element and signUpButton
        document.getElementById("signUp").style.display="none";
        document.getElementById("signUpButton").style.display="none";
        //must show the logIn element and button
        document.getElementById("logIn").style.display="block";
        document.getElementById("logInButton").style.display="inline-block";

        //change text
        document.getElementById("text").innerText="log in";
        //change text2 tag ka inner html
        document.getElementById("text2").innerText="don't have an account? sign up";
        //erase display
        document.getElementById("display").innerText="";

    }else{
        //we must hide logIn element and logInButton 
        document.getElementById("logIn").style.display="none";
        document.getElementById("logInButton").style.display="none";

        //must show signUp element and signUpButton
        document.getElementById("signUp").style.display="block";
        document.getElementById("signUpButton").style.display="inline-block";
        //change text
        document.getElementById("text").innerText="sign up";
        //change text2 ka inner html 
        document.getElementById("text2").innerText="have an account? log in.";
        //erase display
        document.getElementById("display").innerText="";
    }

});

//sign up thingy 

let signUp=document.getElementById("signUpButton");
signUp.addEventListener("click",function (){
    let user=document.getElementById("newusername").value;
    //console.log(user);

    let pass=document.getElementById("newpassword").value;
    //console.log(pass);
    return addPassword(user,pass);
});