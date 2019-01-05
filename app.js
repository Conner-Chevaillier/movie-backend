const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.Port || 3000;
const queries = require("./queries.js");

app.use(cors());
app.use(bodyParser.json());

//Favion Route//
app.get('/favicon.ico', (res, req) => res.SendStatus(204))

//Displauy Route
app.get("/:id", function (req, res) {
  queries.createMovie(req.param.id, req.body).then(data => res.json(data[0]))
});
//POST ROUTE
app.post("/.", (res, req) => {
  queries.createMovie(req.body).then(item => res.send(item))
})
//UPDATE
app.put("/.", (res, req) => {
  queries.updateMovie(req.body).then(req.params.id).then(data => res.json(data[0]))
})
//DELETE BY ID ROUTE
app.delete("/.", (res, req) => {
  queries.deleteMovie(req.body).then(req.params.id).then(res.SendStatus(204))
})
//ERROR ROUTE
app.get('*', function (req, res) {
  res.send("serving it on port 3000")
})

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
module.exports = app;
