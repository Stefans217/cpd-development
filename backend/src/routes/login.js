const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const connection = require('../dbConnection');
const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.post('/auth', function(req, res) {

    let email = request.body.email;
	let username = req.body.username;
	let password = req.body.password;

    if(!email || !username || !password){

        connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
            
            if(error) throw error;

            if(results.length > 0){
                req.session.loggedin = true;
                req.session.username = username;
            }else{
                res.send(`No user ${username} found`);
            }
            res.end();

        });

    }else{
        res.send('Please enter email, username and password');
        res.end();
    }

});