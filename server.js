const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("./reviews.db");

// Middleware
app.use(cors());
app.use(bodyParser.json());
console.log(db)
// Create a table for reviews
db.run(
  "CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, review TEXT)"
);

// API to get reviews
app.get("/reviews", (req, res) => {
    console.log("get api reviews")
  db.all("SELECT * FROM reviews", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log("no error")
    res.json(rows);
  });
});

// API to add a review
app.post("/reviews", (req, res) => {
  const { name, review } = req.body;
  db.run(
    "INSERT INTO reviews (name, review) VALUES (?, ?)",
    [name, review],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
