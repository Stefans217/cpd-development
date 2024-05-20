//server file

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
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

connection.connect((err) => {
  if(err){
    console.error('error connection: ', err);
    return;
  }
  console.log('connected to database');
})

connection.end();