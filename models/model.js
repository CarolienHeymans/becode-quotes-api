let mongoose = require('mongoose')
let quoteSchema= new mongoose.Schema({
    quote: String,
       film: String
})
module.exports= mongoose.model('Quote',quoteSchema)