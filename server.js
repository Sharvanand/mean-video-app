
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const cors       = require('cors');
const mongoose   = require('mongoose');
const api        = require('./server/routes/api');


const db         = 'mongodb://localhost:27017/video';


// PORT Number..
const port       = 3000;

// Express function..
const app        = express();


// Connecting Databse ..
mongoose.connect( db , (err) => {
    if(err) {
        console.log("MongoDB is not connected " + err);
    }
    else {
        console.log("MongoDB is successfully connected....!!! ");
    }
    
});



// Middlewares...
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', api );



//Home route..

app.get('*', (req, res) =>{
    
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });




app.listen(port, () => {
    console.log("Sever is running on " + port );
});





