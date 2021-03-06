const express = require("express");
let Quote = require('../models/model')

module.exports = app => {
  app.get('/', function (req, res) {
    res.sendfile('index.html')
  })

  app.get('/quotes', (req, res) => {
    Quote.find((err, quotes) => {
      //get all quotes
      if (err) {
        res.send(err)
      }
      res.json(quotes)
    })
  });
  app.get('/quotes/random', (req, res) => {
    //random quote
    Quote.find((err, quotes) => {
      if (err) {
        res.send(err)
      }
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      res.send(randomQuote);
    })
  });
  app.post("/quotes", (req, res) => {
    //add quote
    let newQuote = new Quote({
      quote: req.body.quote,
      film: req.body.film
    });

    newQuote.save(function (err) {
      if (err) return handleError(err);
      console.log('Saved!');
      res.sendStatus(200);
    });
  });
  app.get('/quotes/film/:film', (req, res)=> {
    const filmSearch=req.params.film
    console.log(filmSearch)
    Quote.find({
    film: {$regex: filmSearch, $options:'i'}
    },  function (err, quotes) {
      if (err) throw err;   
            console.log(quotes);
      res.send(quotes);
    });
  });
  app.get("/quotes/:quoteId", (req, res) => {
    // get the Quote by id
    Quote.find({
      _id: req.params.quoteId
    }, function (err, Quote) {
      if (err) throw err;
      //console.log(Quote);
      res.send(Quote);
    });
  });

  app.put("/quotes/:quoteId", (req, res) => {
    // find the Quote by id
    Quote.findOneAndUpdate({
      _id: req.params.quoteId
    }, {
      quote: req.body.quote,
      film: req.body.film
    }, function (err, Quote) {
      if (err) throw err;
      console.log(Quote, 'Updated');

      res.sendStatus(200);
    });
  })
  app.delete("/quotes/:quoteId", (req, res) => {
    // find the Quote by id &delete
    Quote.findOneAndDelete({
      _id: req.params.quoteId
    }, function (err) {
      if (err) throw err;
      console.log('Deleted');
      res.sendStatus(200);
    });
  });
};