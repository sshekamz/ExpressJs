const expres=require('express');

const router=expres.Router();

//
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="title"><button type="submit">Send</button> </form>')

});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;