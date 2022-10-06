const expres=require('express');

const router=expres.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><input type="text" name="size"><button type="submit">Send</button> </form>')

});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;