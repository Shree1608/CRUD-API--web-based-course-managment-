const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
 

const app = express();
const port = 8008 ;

require('./models/index');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


const router = require('./routes/courseRouter');

app.use('/api/courses',router)


app.get("/" , (req,res) => {
    res.send("hii");
});

app.listen(port ,() =>{
    console.log(`Server is running on http://localhost:${port} `);
});   