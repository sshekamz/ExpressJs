const expres= require('express');
const bodyParser=require('body-parser');
const app=expres();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Send</button> </form>')

});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    //console.log("in the another middleware");
    res.send('<h1>Hello from Express</h>')
    
});

app.listen(4000);