const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    categoryId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }]
})

module.exports = mongoose.model("product", productSchema)