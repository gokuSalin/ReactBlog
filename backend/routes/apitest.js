const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("Welcome to my personal blog");
})

module.exports = router;