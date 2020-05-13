function createProduct (data) {
    const { name, value, color, material } = data
    
    let product = {};

    product.name = name;
    product.value = value;
    product.color = color;
    product.material = material;

    return product;
}

exports.createProduct = createProduct;