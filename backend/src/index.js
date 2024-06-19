const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbConnection');
const path = require('path');
const log = require('./log');
const cors = require('cors');

const port = 80;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());



app.get('/', (req, res) => {
  res.send('Backend Server');
});

// cors configuration for production
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

app.get('/api/businesses', async (req, res) => {
  const businesses = [
    { id: 1, name: "Bill", age: 99 },
    { id: 2, name: "Alice", age: 45 }
  ];
  res.json(businesses);
});
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
//})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.js'))
});



app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});