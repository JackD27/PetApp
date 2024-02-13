const express = require('express');
const cors = require('cors');
const caching = require('./middlewares/cache');

const app = express();

app.use(cors());
app.use(express.json());
app.use(caching);

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/owners', require('./routes/ownerRoutes'));
app.use('/api/v1/pets', require('./routes/petRoutes'));

module.exports = app;