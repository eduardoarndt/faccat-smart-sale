const googleTrends = require('google-trends-api');

async function sortProductByTrend(products) {
    let trendsApiResult = await trendApiCall(products);
    let normalizedProductsWithTrend = await mapTrendsResults(products, trendsApiResult);
    let result = await sortProductsByTrend(normalizedProductsWithTrend);

    return result;
}

function trendApiCall(products) {
    let productNames = [];

    products.forEach(element => {
        productNames.push(element.name);
    });

    return googleTrends.interestOverTime({ keyword: productNames })
        .then((res) => {
            return JSON.parse(res).default.averages;
        })
        .catch((err) => {
            console.log('got the error', err);
        })
}

function mapTrendsResults(products, trendsApiResult) {
    console.log("mapping results to products");

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        product.trend = trendsApiResult[index];
    }

    console.log(products);

    return products;
}

function sortProductsByTrend(products) {
    console.log("sorting by trend score");

    products.sort((b, a) => parseFloat(a.trend) - parseFloat(b.trend));
    return products;
}

module.exports.sortProductByTrend = sortProductByTrend;