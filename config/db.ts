const mongoose = require("mongoose");

require("dotenv").config({path:"../.env"})

mongoose.set('strictQuery', true); 
const password = encodeURIComponent("Dhoni@2005");
// const _DBUrl =process.env.DATA;
mongoose
  .connect(`mongodb+srv://duginisaisharan:${password}@cluster0.h4tlhz1.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err:Error) => console.log(`Connection failed ! Error : ${err}`));