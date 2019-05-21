const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    image: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);