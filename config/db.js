const mongoose = require("mongoose");

require("dotenv").config({path:"../.env"})

mongoose.set('strictQuery', true); 
// const password = encodeURIComponent("NaNi....");
// const _DBUrl =process.env.DATA;
mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));