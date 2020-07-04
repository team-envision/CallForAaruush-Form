const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// connect DB
connectDB();

// Define port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to Call For Aaruush API' })
);

// Define Routes
app.use('/api/addForm', require('./routes/forms'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
