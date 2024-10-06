const mongoose=require('mongoose');
const {Schema}=mongoose;

const taskSchema=new Schema({
    task:{
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false
    }},
    {
        timestamps:true
    }
)
const task=mongoose.model('task',taskSchema)
module.exports= task;