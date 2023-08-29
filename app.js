const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Get references to the button and the element
const toggleButton = document.getElementById("toggleButton");
const elementToToggle = document.getElementById("select");
const selectElement = document.querySelector("section");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
  // Toggle the display property of the element
  if (elementToToggle.style.display === "none") {
    selectElement.style.display = "none";
    elementToToggle.style.display = "flex"; // or 'inline', 'flex', etc.
  } else {
    elementToToggle.style.display = "none";
  }
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/survydb", {
  useNewUrlParser: true,
});


const survySchema = new mongoose.Schema({
  
  Fname: String,
  Lname : String,
  Email : String,
  Mnumber: Number

});
const Survy = mongoose.model("survy" , survySchema);

app.post("/", function(req,res){
  const newS = new Survy({
    Fname : req.body.fname,
    Lanme : req.body.last_name,
    Email : req.body.email,
    Mnumber : req.body.no
  })
  
    newS.save();
  
  });
  
