class ProductRepository {
    constructor() {
        this.products = []
    }

    save(product) {
        this.products.push(product)
    }

    findAll() {
        return this.products
    }

    findAllActive() {
        return this.products.filter(prod => prod.active == 1)
    }

    findById(id) {
        return this.products.find(prod => prod.id == id)
    }
}

module.exports = ProductRepository