const http = require('http');
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/pokemon', require('./routes/pokemonRoutes'))

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app