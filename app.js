const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.Port || 3000;
const queries = require("./queries");
app.use(cors());
app.use(bodyParser.json());
// const listings = require("./listings.json");
app.get("/", (req, res) => {
  queries.dbQueryGetAll().then(res => res.send(response));
});
app.get("/", (req, res) => {
  queries.dbQueryGetById(req.param.id);
});
// app.post("/", (res, req) => {
//   let NewListing = res.body;
//   listings.push(NewListing);
//   res.send(NewLsiting);
// });
// app.use((req, res, next) => {
//   res.status(404).json({ message: "Not found." });
// });

// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   res.status(status).json({ error: err });
// });
app.listen(port, function() {
  console.log(`Listening on ${port}`);
});
module.exports = app;
