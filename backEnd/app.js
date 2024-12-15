const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// const PORT = 4444;
app.get('/',(req,res)=>{
    res.send("Lets Begin");
})
app.use('/users',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;