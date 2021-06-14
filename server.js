const express =require('express');
var mongoose =require('mongoose');
const app= express();

const router =require("./routes/blogsRoutes.js");
require("dotenv").config();


// initialzing the app
app.get("/", function (req, res) {
  res.send("hello world");
})
// middlewares
app.use("/blog",router);

// craete database connection
mongoose.connect("mongodb://localhost/BLOG_DB", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(9000, function () {
  console.log("Server is Up");
});