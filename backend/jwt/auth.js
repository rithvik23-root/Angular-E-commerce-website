const jwt=require("express-jwt");

function authJwt(){
    const secret=process.env.secret;
    const api=process.env.API_URL
    return jwt({
        secret,
        algorithms:["HS256"],
        
    }).unless({
        path:[

            {url:api+"/getCategories",methods:["GET","OPTIONS"]},
            {url:api+"/getProducts",methods:["GET","OPTIONS"]},
            {url:api+"/getFeaturedProducts",methods:["GET","OPTIONS"]},

            api+"/login",
            api+"/addUser"
        ]
    })
}

module.exports=authJwt;