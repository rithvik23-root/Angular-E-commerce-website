const express=require("express");

const app=express();
require("dotenv/config");
const authJwt=require("./jwt/auth");
const multer=require("multer");

const moment=require("moment");






const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Connected to database!"))
.catch (function(err){
console.log(err);
})



const Category=require("./models/category");
const Product=require("./models/products");
const User=require("./models/users");
const Order=require("./models/orders");


const morgan=require("morgan");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

app.use(express.json());
// app.use(authJwt());
app.use(morgan("tiny"));
app.use((err,req,res,next)=>{
    if(err){
        res.send(err.code)
    }
})

const cors=require("cors");
const category = require("./models/category");
const { now } = require("moment");


app.use(cors());

app.options("*",cors());




const api=process.env.API_URL;

////////////////////////////////////////////////////////////


const IMAGE_FILE_TYPES={
    "image/png":"png",
    "image/jpeg":"jpeg",
    "image/jpg":"jpg"
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = IMAGE_FILE_TYPES[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = IMAGE_FILE_TYPES[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
});
  
  const upload = multer({ storage: storage });

  


///////////////////////////////////////category api's//////////////////////////

app.post(api+"/addCategory",async (req,res)=>{
   let category=new Category({
       name:req.body.name,
       
       image:req.body.image
   })
   
   let newCategory=await category.save();

   if(!newCategory){
       res.status(404).send("Category cannot be created");
   }

   else{
       res.status(200).send(newCategory);
   }

})


app.delete(api+"/deleteCategory/:id",async (req,res)=>{
    await Category.findByIdAndDelete(req.params.id).then(success=>{
        if(success){
            res.status(200).send("category deleted")

        }

        else{
            res.status(404).send("Deletion failed")
        }
    }).catch(err=>{
        res.status(400).send(err);
    })
})


app.get(api+"/getCategories",async (req,res)=>{

    await Category.find().then(category=>{
        if(!category){
            res.status(404).send("The categories cannot be retrived from the database")
        }

        else{
            res.status(200).send(category)
        }
    }).catch(err=>{
       res.status(400).send(err);
    })


    
})


app.get(api+"/getCategory/:id",async (req,res)=>{
   
  await Category.findById(req.params.id).then(category=>{
      if(!category){
          res.status(404).send("The category cannot be retrived from the database")
      }

      else{
          res.status(200).send(category)
      }
  }).catch(err=>{
      res.status(400).send(err)
  })

})


app.put(api+"/editCategory/:id",async(req,res)=>{

    await Category.findByIdAndUpdate(req.params.id,
        
        {
            name:req.body.name,
            color:req.body.color,
                icon:req.body.icon,
                image:req.body.image
        },
        {new:true}
        
        
        ).then(category=>{
            if(category){
                res.status(200).send(category)
            }
            else{
                res.status(404).send("Updation failed")
            }
        }).catch(err=>{
            res.status(400).send(err)
        })
})


/////////////////////////////product api's////////////////////////////

app.get(api+"/getProducts",async (req,res)=>{

  let filter={};
    if(req.query.categories){
     filter={category:req.query.categories.split(",")}
     
    }

    // console.log(filter);

    let p= await Product.find(filter).populate("category");
    if(!p){
        res.status(500).send("No products found")
    }
    else{
        res.status(200).send(p)
    }


})


app.get(api+"/getCategoryProducts/:category",async(req,res)=>{
    // let f=await Product.find({isFeatured:true});
    // if(f){
    //     res.status(200).send(f)
    // }
    // else{
    //     res.status(500).send("cannot get any featured products")
    // }

    let p=await Product.find({category:req.params.category});

    

    if(p){
        res.status(200).send(p)
    }

    else{
        res.status(500).send("Cannot retreive products")
    }

    

})

app.get(api+"/getProduct/:id",async(req,res)=>{

    let p= await Product.findById(req.params.id).populate("category");
    if(!p){
        res.status(500).send("No product found")
    }
    else{
        res.status(200).send(p)
    }

})

app.post(api+"/postProduct",async (req,res)=>{
    
    
    // let category=await Category.findById(req.body.category);
    // if(!category){
    //     console.log(category);
    //     return res.status(404).send("invalid category")
    // }
    
    // const fileName=file.filename;
    
    
    
    

    let newProduct=new Product({

        name:req.body.name,
        description:req.body.description,
        richDescription:req.body.richDescription,
        image:req.body.image,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,

        countInStock:req.body.countInStock,
        rating:req.body.rating,
        isFeatured:req.body.isFeatured,

    })

    await newProduct.save().then(p=>{
        if(p){


            res.status(200).send(p)
        }

        else{
            res.status(404).send("product cannot be created")
        }
    }).catch(err=>{
        res.status(400).send(err)
    })
});


app.put(api+"/updateProduct/:id",async (req,res)=>{


    

   

    await Product.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
        description:req.body.description,
        richDescription:req.body.richDescription,
        image:req.body.image,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,

        countInStock:req.body.countInStock,
        rating:req.body.rating,
        isFeatured:req.body.isFeatured,
        },{new:true}
        ).then(p=>{
            if(!p){
                 res.status(500).send("Problem Occured")
            }
            else{
                res.status(200).send(p)
            }
        }).catch(err=>{
            res.status(404).send(err)
        })




});


app.delete(api+"/deleteProduct/:id",async (req,res)=>{
    console.log("entered")
    await Product.findByIdAndDelete(req.params.id).then(d=>{
        if(d){
            res.send("deletion successful")
        }

        else{
            res.status(500).send("error occured")
        }
    }).catch(err=>{
        res.status(404).send(err)
    })
})




////////////////////////////User Api's/////////////////////////////////////

app.post(api+"/addUser",async (req,res)=>{
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10),
        address:{
            hNo:req.body.hNo,
            area:req.body.area,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode
        },
        phone:req.body.phone,
        isAdmin:req.body.isAdmin

    });
   let user=await newUser.save();

   if(user){
       res.status(200).send(user)
   }
   else{
       res.status(500).send("error occured")
   }

   

   
});


app.get(api+"/getUsers",async (req,res)=>{

    
  
      let user=await User.find().select("-password")
      if(!user){
          res.status(500).send("No users found")
      }
      else{
          res.status(200).send(user)
      }
  
  
  })
  
  app.get(api+"/getUser/:id",async(req,res)=>{
  
      let p= await User.findById(req.params.id).select("-password");
      if(!p){
          res.status(500).send("User not found")
      }
      else{
          res.status(200).send(p)
      }
  
  })

  app.put(api+"/editUser/:id",async(req,res)=>{

       let u=await User.findById(req.params.id);
       let newPassword;
       if(req.body.password){
           newPassword=bcrypt.hashSync(req.body.password,10);
       }
       else{
            newPassword=u.password;
       }

       let user=await User.findByIdAndUpdate(req.params.id,

        {

            name:req.body.name,
        email:req.body.email,
        password:newPassword,
        address:{
            hNo:req.body.hNo,
            area:req.body.area,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode
        },
        phone:req.body.phone,


        },{new:true}
        
        
        );

        if(user){
            res.status(200).send(user)
        }

        else{
            res.status(404).send("ERROR")
        }

  })


  app.post(api+"/login",async (req,res)=>{
      let user=await User.findOne({email:req.body.email});
      let secret=process.env.secret;
      
      if(user){
          if(bcrypt.compareSync(req.body.password,user.password)){
              const token=jwt.sign({
                  userID:user._id,
                  isAdmin:user.isAdmin
              },secret,{expiresIn:"1d"})
              res.status(200).send({id:user._id,email:user.email,isAdmin:user.isAdmin,token})
          }

          else{
              res.status(500).send("Password is wrong");
          }
      }

      else{
          res.status(400).send("Authentication failed")
      }
  })

  


  ///////////////////////////////Order Api's/////////////////////////////////////

  app.post(api+"/postOrder",async (req,res)=>{
      
   let newOrder=new Order({
    orderedItem:req.body._id,
    user:req.body.user,
    shippingAddress:{
       hNo:req.body.hNo,
       area:req.body.area,
       state:req.body.state,
       pincode:req.body.pincode,
       city:req.body.city
    },

    dateOrdered:moment().add(0,"day"),

    deliveryDate:moment().add(3,"day")

    
   })

   await newOrder.save();
   
//    let uuser=await User.findByIdAndUpdate(req.body.user,{$push:{orderedItems:req.body.id}},{new:true})

   res.send(newOrder);
   
  })

  app.get(api+"/getOrders",async(req,res)=>{
      let orders=await Order.find();
      if(orders){
          res.status(200).send(orders)
      }
      else{
          res.status(500).send("cannot retreive")
      }
  })

  app.get(api+"/getUserOrders/:id",async(req,res)=>{
      let orders=await Order.find({user:req.params.id}).populate("orderedItem").select("orderedItem dateOrdered deliveryDate  -_id");

      

      if(orders){
          res.status(200).send(orders)
      }

      else{
          res.status(500).send("Cannot retreive Orders")
      }
  })



////////////////////////////////////////////////////////////////////////////

app.listen(3000,()=>{
   
    console.log("Listening on port 3000");
})
