const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbConnection');
const path = require('path');
const log = require('./log');

const port = 80;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.js'))
});

app.get('/', (req, res) => {
  res.send('Backend Server');
});



app.get('/api/businesses', async (req, res) => {
  res.json({
    name:"Bill",
    age:99
  })
  // try {
  //   const connection = await pool.getConnection();
  //   console.log('Connected to the MySQL server.');
  //   const [results, fields] = await connection.query('SELECT * FROM business');
  //   res.json(results);
  //   console.log(results);
  //   connection.release();
  // } catch (error) {
  //   console.error('Error connecting to the MySQL server:', error);
  //   res.status(500).json({ error: 'An error occurred while fetching data' });
  // }
})


// (async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log('Connected to the MySQL server.');
//     const [results, fields] = await connection.query('SELECT * FROM business');
//     // Perform your database operations here
//     // Example: SELECT * FROM users
//     console.log(results);
//     connection.release();
//   } catch (error) {
//     console.error('Error connecting to the MySQL server:', error);
//   }
// })();


app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});