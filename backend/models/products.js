const mongoose=require("mongoose");

const productSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

    richDescription:{
        type:String,
        default:""
    },

    image:{
        type:String,
        required:true,
        default:''
    },
    images:[
        {
            type:String,
            default:""
        }
    ],
    brand:{
        type:String
    },

    category:{
        type:String,
        default:"",
        required:true
    },

    price:{
        type:Number,
        required:true,
        default:0
    },

    
    countInStock:{
        type:Number,
        required:true,
        min:0,
        max:200
    },
    rating:{
        type:Number,
        default:0
    },

    isFeatured:{
        type:Boolean,
        default:false
    },

    dateCreated:{
        type:Date,
        default:Date.now
    },

    
});


module.exports=mongoose.model("product",productSchema);