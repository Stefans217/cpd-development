const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbConnection');
const path = require('path');
const log = require('./log');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');


const port = 80;
const app = express();


//Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());



app.use('/api', dataRoutes);


app.get('/', (req, res) => {
  res.send('Backend Server');
});


// app.get('/api/data', async (req, res) => {
//   const sql = 'SELECT * FROM business';
//   try{
//     const [results] = await pool.query(sql);
//     console.log(results);
//     res.json(results);
//   }catch(e){
//     res.status(500).send(e);
//     console.error('error querying database: ', e)
//   }
// });



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.js'))
});


app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});