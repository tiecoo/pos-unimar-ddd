const Customer = require("./Domain/customer")
const CustomerService = require("./Services/customerService")
const CustomerRepository = require("./Repository/customerRepository")

const Product = require("./Domain/product")
const ProductService = require("./Services/productService")
const ProductRepository = require("./Repository/productRepository")

const Order = require("./Domain/order")
const OrderService = require("./Services/orderService")
const OrderRepository = require("./Repository/orderRepository")

const customerRepository = new CustomerRepository();
const productRepository = new ProductRepository();
const orderRepository = new OrderRepository();

//
const customerService = new CustomerService(customerRepository)
const productService = new ProductService(productRepository)
const orderService = new OrderService(orderRepository, productService)

const customer = customerService.createCustomer("Diego Pereira");

const product1 = productService.createProduct("Cabo usb", 20, 1)
const product2 = productService.createProduct("Impressora", 320, 1)

const products = productService.findAll()
console.log(products)
let order = orderService.save(customer.id, products)
console.log(order)
console.log('------------------------------------------------')


if (order != null) {
    orderService.updateOrderStatusById(order.id, "Despachado")
    console.log(orderService.findById(order.id))
    console.log(customerRepository.findById(order.customerId))
}


