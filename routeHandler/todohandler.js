const express = require('express');
const router = express.Router();
const mongoose= require("mongoose");
const todoSchema = require("../schemas/todoSchemas")

const Todo = new mongoose.model("Todo",todoSchema);

//Get all todos
router.get('/',async (req,res)=>{
   await Todo.find({status:"active"},(error,data)=>{
        if(error){
            res.status(500).json({
                error:"this is server error"
            })
        }
        else{
            res.status(200).json({
                result:data,
                massage:"succes find all data"
            })
        }
   })
});
//Get Todo by Id
router.get('/:id',async (req,res)=>{
    await Todo.find({date:req.params.id},(err,data)=>{
        if(err){
            res.status(500).json({
                error:"this is server side error"
            });
        }  else{
            res.status(200).json({
                result:data,
                success:"success"
            })
        }
    })
});
//Post Todos
router.post('/',async (req,res)=>{
    const newTodo = new Todo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server side erorr"
            })
        }
        else{
            res.status(200).json({
                succuss:"data inster succesfully"
            })
        }
    })
});
//Post Multiple Todos
router.post('/all',async (req,res)=>{
    await Todo.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json({
                error:"there was server side erorr"
            })
        }
        else{
            res.status(200).json({
                success:"todo were successfully inserted"
            })
        }
    })
});
//update  Todos
router.put('/:id',async (req,res)=>{
    await Todo.updateOne({_id:req.params.id},{
        $set:{
            status:"active"
        }
    },(err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server error"
            })
        }
        else{
            res.status(200).json({
                success: " todo update succussfully"
            })
        }
    })
});
//update  Todos
router.delete('/:id',async (req,res)=>{
    await Todo.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.status(500).json({
                error:"this is server error"
            })
        }
        else{
            res.status(200).json({
                succuss:"todo delete successfully"
            })
        }
    })
});

module.exports = router;
