const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({

       orderedItem:
        {

            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            
           

       }
       ,

       shippingAddress:{
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

quantity:{
    type:String,
    default:""
},

status:{
    type:String,
    default:"pending"
},

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},

dateOrdered:{
    type:String
    
},

deliveryDate:{
    type:String,
    
}

       

});

module.exports=mongoose.model("order",orderSchema);