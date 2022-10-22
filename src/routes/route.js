const express = require('express');
const router = express.Router();

//_______________Exporting Middleware__________________//

const middleWare=require("../middleware/auth");

//_________________Exporting Controller_________________//

const userController=require("../controller/userController")
const productController=require("../controller/productController")
const cartController=require("../controller/cartController")
const orderController= require("../controller/orderController")

//____________________API'S________________________//

router.post('/register',userController.createUser)
router.post('/login',userController.userLogin)
router.get("/user/:userId/profile",middleWare.authentication,userController.getUserDetail)
router.put("/user/:userId/profile",middleWare.authentication,userController.updateUser)

//____________________PRODUCT API____________________//

router.post("/products",productController.createProduct)
router.get('/products',productController.getProduct)
router.get('/products/:productId', productController.getProductById)
router.put('/products/:productId',productController.updateProduct)
router.delete('/products/:productId', productController.deleteProductById)

//_______________________CART API'S____________________//

router.post("/users/:userId/cart",middleWare.authentication,cartController.createCart)
router.put('/users/:userId/cart',middleWare.authentication,cartController.updateCart)
router.get("/users/:userId/cart",middleWare.authentication,cartController.getCart)
router.delete("/users/:userId/cart",middleWare.authentication,cartController.deleteCartById)

//______________________ORDER API'S_________________________//

router.post("/users/:userId/orders",middleWare.authentication,orderController.createOrder)
router.put("/users/:userId/orders",middleWare.authentication,orderController.updateOrder)

module.exports = router;