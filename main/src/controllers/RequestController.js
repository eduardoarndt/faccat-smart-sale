const productFactory = require('./../models/product.js')

module.exports = {
    readProductList(request, response) {
        console.log("Received request: ", request.body);
        
        let product = productFactory.createProduct(request.body);

        console.log("Parsed product: ", product);

        return response.json({
            msg: "Hello World!"
        });
    }
}