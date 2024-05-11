const uuid = require("uuid")
const Order = require("../Domain/order")
const ProductService = require("../Services/productService")

class OrderService {
    constructor(orderRepository, productService) {
        this.orderRepository = orderRepository
        this.productService = productService
    }

    save(customerId, products) {
        const id = uuid.v4()
        const status = "Criado"
        if(products.some(product => !this.productService.isProductActive(product.id))) {
            console.log("Não é possível criar esse pedido pois existem produtos inativos")
            return null
        }
        const order = new Order({id, customerId, products, status})
        this.orderRepository.save(order)
        console.log(`Pedido criado com sucesso ${order.id}`)
        return order
    }

    updateOrderStatusById(id, status) {
        //notifyCostumerViaMail(customerid, orderd)
        this.orderRepository.updateStatusById(id, status)
    }

    findById(id) {
        return this.orderRepository.findById(id)
    }
}

module.exports = OrderService