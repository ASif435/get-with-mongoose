const moongoose = require('mongoose');

const todoSchema = moongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    deskcription:String,
    status:{
        type:String,
        enum:['active','inactive']
    },
    date:{
        type:Date,
        default:new Date().toString(),
    
    },

});

module.exports = todoSchema;