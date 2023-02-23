const mysql=require('mysql');
const env=require('dotenv').config()

const dbConfig=mysql.createConnection({
    host:'main-db.ca4y1pdkgu8m.us-west-1.rds.amazonaws.com',
    database:'HCDL_MAIN',
    user:process.env.User,
    password:process.env.PASSWORD
})
dbConfig.connect((error)=>{
    if(error) throw error
    console.log('Database connected successfully')
})

module.exports=dbConfig