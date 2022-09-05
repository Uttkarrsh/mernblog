const router = require('express').Router();
const Category = require('../models/Category');

//post
router.post("/", async (req,res)=>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
})

//get
router.get("/", async (req,res)=>{
    try{
        const getCat = await Category.find();
        res.status(200).json(getCat);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;