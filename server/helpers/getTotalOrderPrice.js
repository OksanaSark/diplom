module.exports = function (products) {
    if (products.length) {
        return products.reduce((total, product) => total + product.price * product.count, 0)
    }
    return 0
}
