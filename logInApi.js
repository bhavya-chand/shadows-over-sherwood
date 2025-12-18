const express=require("express");
const fs=require("fs");
const userHub=require("./userHub.json");
const cors=require("cors");


//
const app=express();
app.use(cors());

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//actual api design 


app.route("/api/login").post((req,res)=>{
    //extract email and password from req
    
    let email=req.body.email;
    let password=req.body.password;
    //ensure that neither field is empty 
    if(password==="" || email===""){
        return res.send("field empty. try again.")
    }
    //userHub has all the users 

    const user=userHub.find((u)=>u.email===email);

    if(!user){
        return res.send("user doesn't exist");
    }else{
        if(user.password===password){
            return res.send("login successful.");

        }else{
            return res.send("wrong password.");

        }
    }
    
    



});

app.route("/api/signup").post((req,res)=>{
    //extract email and password from req
    const body=req.body;
    
    let email=req.body.email;
    let password=req.body.password;
    //ensure non empty fields 
    if(email==="" || password===""){
        return res.send("field empty. try again.")
    }
    //ensure that email isn't already there 
    const user=userHub.find((user)=>user.email===email) 
    if(user)return res.send("user already exists.");
    //ensure password is of appropriate length
    if(password.length<6){
        return res.send("password too short.");
    }
    //register this user in the userHub
    userHub.push({email:email,password:password});
    //write back into file 
    fs.writeFile("./userHub.json",JSON.stringify(userHub),(err)=>{
        if(err) return res.send("try again.something went wrong.");
        return res.send("account made.");
    });


});

app.listen(3001,()=>{
    console.log("server started");
});