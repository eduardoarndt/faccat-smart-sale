function createProduct (data) {
    const { name, value, color, material } = data
    
    if (!name.trim()) {
        throw new Error("Product name is empty or doesn't exist");
    }

    let product = {};

    product.name = name;
    product.value = value;
    product.color = color;
    product.material = material;

    return product;
}

exports.createProduct = createProduct;