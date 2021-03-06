const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const bodyParser = require("body-parser");
const scrapers = require("./scrapers");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(port, () =>
  console.log(`listening at http://localhost:${port}`)
);

app.post("/something", async (req, res) => {
  console.log("something endpoint", req.body);
  const jobData = await scrapers.scrapeChannel(req.body.customURL, req.body.techInput);
  res.send(jobData);
});