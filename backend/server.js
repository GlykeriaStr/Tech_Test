const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express(); // creating express server
const port = process.env.PORT || 5000; // port that the server will be on

app.use(cors()); // cors middleware
app.use(express.json()); //this will allow us to parse json

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
