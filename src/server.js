const data = require('dotenv').config();
const express = require('express');
const app = express();
require('./config/config');
const cors = require('cors');
// const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());

// app.use(routes);

app.get('/api/status', (req, res) => {
  res.status(200).send('REST API ASISTENCIA SOCIAL EN LINEA!!!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});

module.exports = {
  env: {
    ...data.parsed
  }
}