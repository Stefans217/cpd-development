const app = require('express');
const router = app.Router();
const pool = require('../dbConnection');
var validator = require("email-validator");
const bcrypt = require('bcryptjs');



//Register: VALIDATE -> CHECK EXISTING USER -> HASH PASSWORD -> INSERT DATA -> RETURN
router.post('/register', async (req, res) => {

    const { username, email, password } = req.body;
    console.log(username, email, password);
    const userRole = 'reg';
      // Validate required fields
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    //validate email
    if(!validator.validate(email)){
        res.status(400).send('invalid email');
    }
    //validate password regex -> at least 1 digit, at least one lowercase, at least one uppercase, between 8-20 chars
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}$/;
    if(!password.match(passw)){
        res.status(400).send("bad password");
    }

    try{

        //check existing user. Select Query -> if result exists then user exists
        const sql_check_username_exists = "SELECT * FROM users WHERE username = ?";
        const [existingUsername] = await pool.query(sql_check_username_exists, [username]);
        if(existingUsername.length > 0){
            return res.status(400).json({message: 'Username already exists'});
        }

        const sql_check_email_exists = "SELECT * FROM users WHERE email = ?";
        const [existingEmail] = await pool.query(sql_check_email_exists, [email]);
        if(existingEmail.length > 0){
            return res.status(400).json({message: 'User email already exists'});
        }

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //insert user data. Insert Query
        const sql_insert_user = "INSERT INTO users (username, email, pass, userRole) VALUES (?, ?, ?, ?);"
        pool.query(sql_insert_user, [username, email, hashedPassword, userRole], (err) => {
            if(err) throw err;
            res.send('user data inserted');
        });

        //success
        res.status(201).json({ message: 'user registered successfully'});

    }catch(e){
        console.error('Error in /register:', e); // Log the actual error
        res.status(500).json({message: 'Server error in /register'});
    }
    
});

router.get('/login', (req, res) => {
    
});

module.exports = router;