class Order {
    constructor ({ id, customerId, products, status}) {
        this.id = id
        this.customerId = customerId
        this.products = products
        this.status = status
    }
}

module.exports = Order