const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const port = 3000;

const api = require('./server/routes/api');

const app = express();

// Middlewares...
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', api );

app.get('*', (req, res) =>{

    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
    console.log("Sever is running on " + port );
});





