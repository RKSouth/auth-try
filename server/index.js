const express = require("express")

const app = express();
const cors = require('cors')

app.use(cors());

app.use(express.json())

app.use('/auth', require("./routes/auth"))
app.use('/posts', require("./routes/posts"))

app.listen((5000), () => {
    console.log("Listening on port 5000")
})