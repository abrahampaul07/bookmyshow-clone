const express = require('express');
const app = express();

require('dotenv').config();

console.log(process.env.test_name);
require('./config/dbConfig');

app.listen(8082, () => {
    console.log("Server is running on")
})