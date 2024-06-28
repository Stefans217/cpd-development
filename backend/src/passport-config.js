const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const connection = require('./dbConnection');


module.exports = function(passport) {
    passport.use(new localStrategy((email, password, done) => {
        connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return done(err);
            if (results.length === 0) return done(null, false, { message: 'Account with that email does not exist.' });

            const user = results[0];
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) return done(null, user);
                else return done(null, false, { message: 'Incorrect password.' });
            });
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        connection.query('SELECT * FROM users WHERE userid = ?', [id], (err, results) => {
            if (err) return done(err);
            else done(null, results[0]);
        });
    });
};