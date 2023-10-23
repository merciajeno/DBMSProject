const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123@sql',
  database: 'project',
});

dbConnection.connect();

app.post('/insert', (req, res) => {
  const { field1, field2 } = req.body;
  // Add more fields as needed

  const query = 'INSERT INTO sample (id, name) VALUES (?, ?)';
  dbConnection.query(query, [field1, field2], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data' });
    } else {
      console.log('Data inserted successfully.');
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
