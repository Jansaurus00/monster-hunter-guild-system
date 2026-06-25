const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const hunterRoutes = require('./routes/hunterRoutes')

const app = express();

app.use(cors());
app.use(express());
app.use('./api/hunters', hunterRoutes)

mongoose.connect('mongodb+srv://jan:mAXIbSBZLRVGvUQd@monster-hunter-guild-sy.9ijhkz3.mongodb.net/?appName=monster-hunter-guild-system')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server running on port 3000')
});