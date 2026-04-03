const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/ai", (req, res) => {
  res.send("AI ka content");
});

app.post("/data", (req, res) => {
  const data = { name: "John Doe", age: 30, city: "New York" };
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server chal rha hai");
});
