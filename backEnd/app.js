const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); 

// const PORT = 4444;
app.get('/',(req,res)=>{
    res.send("Lets Begin");
})


module.exports = app;