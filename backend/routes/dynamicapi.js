const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log('Time : '+Date.now());
    next();
})
router.get('/:id',(req,res,next)=>{
    console.log(req.params, ': data')
    res.send(req.params.id);
})

module.exports = router;