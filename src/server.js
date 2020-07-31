const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));
