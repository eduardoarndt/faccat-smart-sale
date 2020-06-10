const { ExploreTrendRequest, SearchProviders } = require('g-trends');
const csvParser = require("csv-parse");
const trendRequest = new ExploreTrendRequest();

async function sortProductByTrend(products) {
    products.forEach(element => {
        trendRequest.addKeyword(element.name);
    });

    let trendsApiResult = await trendApiCall();
    let normalizedProductsWithTrend = await mapTrendsResults(products, trendsApiResult);
    let result = await sortProductsByTrend(normalizedProductsWithTrend);

    return result;
}

function trendApiCall() {
    return trendRequest.past30Days().download().then(csv => {
        console.log('Resuls retrieved from google trends!');
        return csv;
    }).catch(error => {
        console.log(error);
        throw new Error("Failed fetching datas from google trends", error);
    });
}

function mapTrendsResults(products, trendsApiResult) {
    console.log("mapping results to products");
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        for (let j = 1; j < trendsApiResult.length; j++) {
            const element = Number(trendsApiResult[j][i + 1]);

            if (product.trend) {
                product.trend += element;
            } else {
                product.trend = element;
            }
        }
    }

    return products;
}

function sortProductsByTrend(products) {
    console.log("sorting by trend score");
    
    products.sort((b, a) => parseFloat(a.trend) - parseFloat(b.trend));
    return products;
}

module.exports.sortProductByTrend = sortProductByTrend;