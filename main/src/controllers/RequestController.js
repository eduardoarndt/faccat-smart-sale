const { ExploreTrendRequest } = require('g-trends');
const productFactory = require('./../models/product.js');
const trendController = require('./../controllers/TrendsController');

const trendRequest = new ExploreTrendRequest();

async function readProductList(request, response) {
    console.log("Received request: ", request.body);

    let productList = [];
    
    request.body.forEach(element => {
        productList.push(productFactory.createProduct(element))
    });

    console.log("Parsed product list: ", productList);

    let productResults = await trendController.sortProductByTrend(productList);

    return response.json(productResults);
}

module.exports.readProductList = readProductList;