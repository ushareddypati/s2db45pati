const mongoose = require("mongoose") 
const olavehicleSchema = mongoose.Schema({ 
    vehiclenumber : String, 
    numberofpassengers : Number, 
    amount : String 
}) 
 
module.exports = mongoose.model("Olavehicle", olavehicleSchema) 