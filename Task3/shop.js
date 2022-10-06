const expres=require('express');

const router=expres.Router();

router.get('/',(req,res,next)=>{
    //console.log("in the another middleware");
    res.send('<h1>Hello from Express</h>')
    
});

module.exports=router;