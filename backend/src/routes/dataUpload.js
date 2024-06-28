const pool = require('../dbConnection');
const app = require('express');
const router = app.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/dataUpload', async (req, res) => {

    const {username, nickname, password, email} = req.body;
    console.log(email, username, password, nickname);
    const userRole = 'reg';
    const sql = `INSERT INTO customer 
                (username, nickname, pass, email, userRole) 
                VALUES (?,?,?,?,?);`;
    pool.query(sql, [nickname, username, password, email, userRole], (err) => {
        if(err) throw err;
        res.send('customer data inserted');
    });
});


module.exports = router;