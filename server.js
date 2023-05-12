const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import routes
const trackerRouter = require('./routes/tracker');
app.use('/tracker', trackerRouter);

app.listen(5000, () => {
    console.log('Server started');
});