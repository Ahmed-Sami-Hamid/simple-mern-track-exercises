const express = require("express");

// express app
const app = express();

// listen to request
app.listen(4000, () => {
  console.log("server listening on port 4000");
});
