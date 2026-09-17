const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
    },
    specialization:{
        type:String,
        require:true,
        trim:true,
    },
    qualification:{
        type:String,
        required:true,
        trim:true,
    },
    experience:{
        type:Number,
        required:true,
        min:0
    },
    consultationFee:{
        type:Number,
        required:true,
        min:0
    },
    bio:{
        type:String,
        trim:true,
        maxlength:1000,
    },
    profileImage:{
        type:String,
        default:" "
    },
    isActive:{
        type:Boolean,
        default:true,
    }
},
{
    timestamps:true,
}
)

module.exports = mongoose.model("Doctor",doctorSchema)