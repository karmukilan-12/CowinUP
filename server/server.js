const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// import express from 'express';
// import cors from 'cors'
// import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kar@db04",
  database: "cowin",
});

// db.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('DB connected')
// })



//app.get("/", (req, res) => {
//  res.json("hello");
//});

app.get("/vaccine", (req, res) => {
  const q = "SELECT * FROM cowinup";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    return res.json(data);
  });
});

app.post("/vaccine", (req, res) => {
  const q = "INSERT INTO cowinup(center, address, slots, issue_date) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.center,
    req.body.address,
    req.body.slots,
    req.body.issue_date,
  ]; 

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
    } //return res.send(err);
    console.log("created");

    
  });
  res.status(200).send({message:"created"});
});

app.delete("/vaccine/:id", (req, res) => {
  const vaccineId = req.params.id;
  const q = " DELETE FROM cowinup WHERE id = ? ";

  db.query(q, [vaccineId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/vaccine/:id", (req, res) => {
  const vaccineId = req.params.id;
  const q = "UPDATE cowinup SET center= ?, address= ?,slots= ?, issue_date = ? WHERE id = ?";

  const values = [
    req.body.center,
    req.body.address,
    req.body.slots,
    req.body.issue_date,
  ];

  db.query(q, [...values,vaccineId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
})