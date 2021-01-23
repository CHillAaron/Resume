const ProductsController = require("../controllers/products.controllers");

module.exports = app => {
    app.get("/api/product", ProductsController.findAllProducts);
    app.post("/api/products/create", ProductsController.createProduct);
    app.get("/api/products/:id", ProductsController.findOneProduct);
    app.delete("/api/products/delete/:id", ProductsController.deleteOneProduct);
    app.put("/api/products/update/:id", ProductsController.updateProduct);
}

