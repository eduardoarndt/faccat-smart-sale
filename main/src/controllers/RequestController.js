const productFactory = require('./../models/product.js');

module.exports = {
    readProductList(request, response) {
        console.log("Received request: ", request.body);
        
        let productList = [];

        request.body.forEach(element => {
            productList.push(productFactory.createProduct(element))
        });

        console.log("Parsed product list: ", productList);

        return response.json(productList);
    }
}