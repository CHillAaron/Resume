const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

require("./server/config/database.config");
require("./server/routes/products.routes")(app)
  

app.listen(port, ()=>console.log(`We have found the main frame`))