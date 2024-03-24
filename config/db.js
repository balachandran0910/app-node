const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("connected",()=>console.log("Mongodb connected successfully"));
mongoose.connection.on("reconnected",()=>console.log("Mongodb reconnected successfully"));
mongoose.connection.on("disconnected",()=>console.log("Mongodb disconnected successfully"));
mongoose.connection.on("error",err=>{
    console.error(err);
    console.log("Mongodb connected successfully");
    mongoose.disconnect();
});