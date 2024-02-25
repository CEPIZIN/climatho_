import ProductDb from "../Models/ProductModel.js";

class ProductManager{

    static async GetProduct(req,res){
        try{
            let product = await ProductDb.find();
            res.status(201).json({product})
        }catch(err){
            res.status()
        }

    }

    static async GetByCategory(req,res){
        try {
            let category = req.body.category; 

            if (!category) {
                return res.status(400).json({ error: "Categoria não especificada" });
            }

            let products = await ProductDb.find({ category: category });

            if (products.length === 0) {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }

            res.status(200).json({ products });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default ProductManager;