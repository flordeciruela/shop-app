'use strict';

const express = require('express');
const app = express();
app.use('/', express.static('app'));
const port = process.env.PORT || 8551;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
