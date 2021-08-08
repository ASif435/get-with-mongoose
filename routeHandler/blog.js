const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const blogSchema = require("../schemas/todoSchemas")
const blog = new mongoose.model('blog',blogSchema)
//get blog home pages
router.get('/', async (req,res)=>{
    res.send("this is blog")
});
//get single blog items
router.get('/:id', async (req,res)=>{

});
//post single blog items
router.post('/blogpost', async (req,res)=>{

});
//update  blog items
router.put('/:id', async (req,res)=>{

});
//delete  blog items
router.delete('/:id', async (req,res)=>{

});

module.exports = router;