const uuid = require("uuid")
const Product = require("../Domain/product")


class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    createProduct( name, price, active) {
        const id = uuid.v4()
        const product = new Product({id, name, price, active})
        this.productRepository.save(product)
        console.log(`Produto ${product.name} criado com sucesso`)
        return product
    }

    findAll() {
        return this.productRepository.findAll()
    }

    findById(id) {
        return this.productRepository.findById(id)
    }

    isProductActive(id) {
        const product = this.productRepository.findById(id)
        return product.active == 1 ? true : false
    }
}

module.exports = ProductService