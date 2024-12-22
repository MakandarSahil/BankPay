const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.routes');
const dotenv = require("dotenv")
dotenv.config()
require('./config/mongodb.connection');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, ()=>{
  console.log(`server started at https://localhost:${port}`);
})