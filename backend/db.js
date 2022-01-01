const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/Ecommerce?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect(mongoURI , ()=>{
        console.log("Connect to Mongo SuccessFully")
    })
}

module.exports = connectToMongo;