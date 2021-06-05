const Router = require('express').Router;
const mongodb = require('mongodb');

const db = require('../db');

const Decimal128 = mongodb.Decimal128;
const ObjectId = mongodb.ObjectId;

const router = Router();



// Add new contact
router.post('/contactsave', (req, res, next) => {

console.log("request" + req);

  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: Decimal128.fromString(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  db.getDb()
    .db()
    .collection('products')
    .insertOne(newProduct)
    .then(result => {
      console.log(result);
      res
        .status(201)
        .json({ message: 'Product added', productId: result.insertedId });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occurred.' });
    });
});


module.exports = router;
