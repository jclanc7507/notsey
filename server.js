const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/notes');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}.');
});