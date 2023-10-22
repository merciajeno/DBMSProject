const mysql = require('mysql');

// Create a connection
const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL database');

  // Execute a sample query
  connection.query('SELECT 1 + 1 AS result', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
    } else {
      console.log('Result of 1 + 1:', results[0].result);
    }

    // Close the connection when you're done
    connection.end((err) => {
      if (err) {
        console.error('Error closing the connection:', err);
      } else {
        console.log('MySQL connection closed');
      }
    });
  });
});
