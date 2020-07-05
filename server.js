const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// connect DB
connectDB();

// Define port
const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/addForm', require('./routes/forms'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
