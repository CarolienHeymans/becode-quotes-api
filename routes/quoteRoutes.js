const express = require("express");
let Quote = require('../models/model')

module.exports = app => {
  app.get('/', function (req, res) {
    res.sendfile('index.html')
  })

  app.get('/quotes', (req, res) => {
    Quote.find((err, quotes) => {
      if (err) {
        res.send(err)
      }
      res.json(quotes)
    })
  });
  app.get('/quotes/random', (req, res) => {
    Quote.find((err, quotes) => {
      if (err) {
        res.send(err)
      }
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      res.send(randomQuote);
    })
  });


  app.post("/quotes", (req, res) => {

    let newQuote = new Quote({
      quote: req.body.quote,
      name: req.body.name,
      book: req.body.book
    });

    newQuote.save(function (err) {
      if (err) return handleError(err);
      console.log('Saved!');
      res.sendStatus(200);
    });
  });
  app.get("/quotes/:name", (req, res) => {
    // get the Quote by name
    Quote.find({
      name: req.params.name
    }, function (err, Quote) {
      if (err) throw err;
      //console.log(Quote);
      res.send(Quote);
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
      name: req.body.name,
      book: req.body.book
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