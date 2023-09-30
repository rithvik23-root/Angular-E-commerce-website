const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    address:{
        hNo:{
            type:String,
            default:""
        },
        area:{
            type:String,
            default:""
        },
        city:{
            type:String,
            default:""
        },
        state:{
            type:String,
            default:""
        },

        pincode:{
            type:String,
            default:""

    }
},

    phone:{
        type:String,
        required:true,
        default:""
    },
    isAdmin:{
   type:Boolean,
   default:false
    },

    orderedItems:[
        {type:String}
    ]

    


});

module.exports=mongoose.model("User",userSchema);