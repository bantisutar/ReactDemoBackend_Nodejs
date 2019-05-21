const Product = require('../models/product.model.js');

// Create and Save a new Product
exports.create = function(req, res) {
    console.log(req.body);
    // Validate request
    // if(!req.body.title) {
    //     return res.status(400).send({
    //         message: "Product content can not be empty"
    //     });
    // }

    // Create a Product
    const product = new Product({
        title: req.body.title || "Untitled product", 
        price: req.body.price || 0,
        desc: req.body.desc || "Untitled desc",
        image: req.body.image || "Untitled iamge"
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all Product from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving product."
        });
    });
};

// Find a single Product with a ProductId
exports.findOne = (req, res) => {

};

// Update a Product identified by the ProductId in the request
exports.update = (req, res) => {

};

// Delete a Product with the specified ProductId in the request
exports.delete = (req, res) => {

};