const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'PIZZAHUTT';
app.get('/pizza', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('Pizza');
    collection.find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
      client.close();

    });

  });

});

app.get('/ingredients', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('ingredients');
    collection.find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
      client.close();

      });

    });

  });
app.listen(7000, () => {

  console.log('Server listening on port 7000');

});