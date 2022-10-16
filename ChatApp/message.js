const express= require('express');
const bodyParser=require('body-parser');
const fs= require('fs');
const router=express.Router();


router.get("/",(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No chats';
        }
        //console.log(data.toString());
        res.send(`${data}
    <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input id="message" type="text" name="message" placeHolder="message">
    <input type="hidden" "name="username" id="username">
    <br/>
    <button type="submit">send</button></form>`)
    })
    
   // console.log(username);
   
})


router.post("/",(req,res)=>{
    console.log('123'+ req.body.username);
    console.log(req.body.message);
    //console.log(req.body);
    fs.writeFile('username.txt',`${req.body.username}: ${req.body.message}`,{flag:'a'}, (err)=>{
        if(err) console.log(err);
        res.redirect('/');
    })
    
})


module.exports=router;