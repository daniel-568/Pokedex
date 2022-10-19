const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    return res.status(200).json({message: 'hello world'});
});

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