const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    deskcription:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    status:{
        type:String,
        require:true,
        enum:['active','inactive'],
    },
})

module.exports = blogSchema;