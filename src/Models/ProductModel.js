import mongoose from "mongoose";

let  ProductData = new  mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    brand: String,
    description: String
});

let ProductDb = mongoose.model("Product", ProductData);

export default ProductDb;