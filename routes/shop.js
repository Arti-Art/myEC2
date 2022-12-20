
const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct); // by using :colon we're telling express that we're not looking for a route, but have a dynamic parameter
// !! if we have something like router.get('/products/delete'); after router.get('/products/:productId');, we'd never reache that /delete route, because it would be treated as a dynamic segment to /products/
// !! ALWAYS put the more specific route first!!
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;
