const googleTrends = require('google-trends-api');

async function sortProductByTrend(products) {
    let trendsApiResult = await trendApiCall(products);
    let result = await sortProductsByTrend(trendsApiResult);
    return result;
}

function trendApiCall(products) {
    console.log("calling trends api");
    let promises = [];

    products.forEach(async element => {
        promises.push(callApi(element));
    });

    console.log('finish calling trends api');
    return Promise.all(promises)
    .then((result) => {
        return result;
    });
}

function callApi(product) {
    return googleTrends.interestOverTime({
        keyword: product.name,
        startTime: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)),
        geo: 'BR'
    }).then((res) => {
        let response = JSON.parse(res);
        product.trend = response.default.timelineData.slice(-1)[0].value[0];
        return product;
    })
    .catch((err) => {
        console.log('Error!', err);
    });;
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