const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const db = require('./config/keys.js').mongoURI;

mongoose
 .connect(db)
 .then (() => console.log("MongoDB Connected"))
 .catch(err => console.log(err));

 const port = process.env.PORT || 5000;
 app.listen(port, () => console.log(`Server listening on ${port}`));
