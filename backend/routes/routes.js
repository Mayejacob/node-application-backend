// import express
import express from "express";

// import functions from controller
import { 
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct,
 } from "../controllers/product.js";

//  initialize express router
const router = express.Router();

// get all product
router.get("/products",showProducts);
// get single product
router.get("/products/:id",showProductById);
// create new product
router.post("/products", createProduct);
// update product
router.put("/products/edit/:id", updateProduct);
// delete product
router.delete("/products/:id", deleteProduct);

// export router
export default router;