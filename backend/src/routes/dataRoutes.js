const pool = require('../dbConnection');
const app = require('express');
const router = app.Router();

router.get('/customer', async (req, res) => {
    const sql = 'SELECT * FROM customer';
    try{
      const [results] = await pool.query(sql);
      console.log(results);
      res.json(results);
    }catch(e){
      res.status(500).send(e);
      console.error('error querying database: ', e)
    }
});



router.get('/business', async (req, res) => {
    const sql = 'SELECT * FROM business';
    try{
      const [results] = await pool.query(sql);
      console.log(results);
      res.json(results);
    }catch(e){
      res.status(500).send(e);
      console.error('error querying database: ', e)
    }
});



router.get('/product', async (req, res) => {
    const sql = 'SELECT * FROM product';
    try{
      const [results] = await pool.query(sql);
      console.log(results);
      res.json(results);
    }catch(e){
      res.status(500).send(e);
      console.error('error querying database: ', e)
    }
});





router.post('/addbusinesses', (req, res) => {
    const { bname, quantityrating, qualityrating, pricerating, address } = req.body;
    const query = 'INSERT INTO businesses (bname, quantityrating, qualityrating, pricerating, address) VALUES (?, ?, ?, ?, ?)';
  
    connection.query(query, [bname, quantityrating, qualityrating, pricerating, address], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }
      res.status(200).send('Data inserted successfully');
    });
  });


module.exports = router;