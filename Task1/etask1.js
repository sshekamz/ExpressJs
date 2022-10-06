const http= require('http');

const expres= require('express');

const app=expres();

app.use((req,res,next)=>{
    console.log("in the middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("in the another middleware");
    res.send('<h1>Hello from Express</h>')
    
})
const server =http.createServer(app);


server.listen(4000);