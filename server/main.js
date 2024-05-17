const express = require("express");
const cors = require("cors")
const app = express();
const ai_router = require('./routes/ai_router')
const port = 3000;

app.use(express.json())
app.use(cors({
  origin: "*"
}))
app.use(ai_router)

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});