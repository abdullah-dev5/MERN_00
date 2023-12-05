const express = require("express");
const router = express.Router();

const{GetPerson,createPerson} = require('../controllers/Person.controller')
const{GetProduct,createProduct} = require('../controllers/Product.controller');

router.get("/person",GetPerson);
router.post('/person',createPerson);

router.get('/product',GetProduct);
router.post('/person',createPerson);

module.exports =  router;