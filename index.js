require('dotenv').config();

const express = require('express');
const app = express();

const Conn = require('./src/config/db');
Conn();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('A simple NodeJS + Express.js + Mongoose RESTful API serving data about Countries, States and Cities.');
})

const countriesRoutes = require('./src/routes/countries');
app.use('/countries', countriesRoutes);

const statesRoutes = require('./src/routes/states');
app.use('/states', statesRoutes);

const citiesRoutes = require('./src/routes/cities');
app.use('/cities', citiesRoutes);

app.listen(port, () => {
    console.info(`Server listening at http://localhost:${port}`);
});