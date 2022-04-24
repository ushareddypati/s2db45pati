const mongoose = require("mongoose") 
const olavehicleSchema = mongoose.Schema({ 
    vehiclenumber : {
        type: String, 
        minLength:[5,"not valid "]
    },
    numberofpassengers :{
        type: Number,
        required: [true, "Number is Required"]

    },
    amount : {
        type: String,
        required:true,
        min:[2,"min price $2"],
        max:[500,"max price $500"]
    }
}) 
 
module.exports = mongoose.model("Olavehicle", olavehicleSchema) 