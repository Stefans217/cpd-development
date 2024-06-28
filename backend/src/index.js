const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const dataRoutes = require('./routes/dataRoutes');
const dataUpload = require('./routes/dataUpload');
const authentication = require('./routes/Register');
const initializePassport = require('./passport-config');

initializePassport(passport);

const port = 80;
const app = express();


//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));



app.use('/api', dataUpload);
app.use('/api', dataRoutes);
app.use('/api', authentication);


app.get('/', (req, res) => {
  if(req.isAuthenticated()){
    res.send("Welcome!");
  }else{
    res.send("Please Login!");
  }
});




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.js'))
});


app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});