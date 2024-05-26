//server file

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const port = 80;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.js'))
});

app.get('/', (req, res) => {
  res.send('Backend Server');
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});

const connection = mysql.createConnection({
  host: 'mysql',  // Hostname
  user: 'root',   // Username
  password: 'rootpw',   // Password
  database: 'cpdsolution', // Database name
  port: 3306
})

let sql = "SELECT * FROM product;";

connection.connect((err) => {
  if(err){
    console.error('error connection: ', err);
    return;
  }
  console.log('connected to database');
})
app.get('/')
connection.query(sql, (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});



connection.end();