const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'auth-try'
})
//routes
app.post('/create', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO users (name, email, password) VALUES (?,?,?)',
     [name, email, password], [ err, result])
    if (err) {
        console.log(err)
    } else {
        res.send('values inserted')
    }
})

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(3001, () => {
    console.log('running on port 3001')
})