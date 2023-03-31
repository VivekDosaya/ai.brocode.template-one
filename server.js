const express = require("express");
const ejs = require("ejs");
const fs = require("fs");

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define the route for the /template endpoint
app.get("/template", (req, res) => {
  // Read the EJS file
  const template = fs.readFileSync("./index.ejs", "utf-8");

  // Define the data to be used in the template
  const data = {
    title: "My Website",
    body: "Welcome to my website!",
  };

  // Render the EJS file with the provided data as context and send it as the response
  res.render("example", data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
