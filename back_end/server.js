require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/api', chatRoutes);

app.use(cors({
  origin: 'travelappdomain.com', // Replace with your actual Netlify domain
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
