import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // leave blank if no password
  database: 'movie_booking'
});

connection.connect((err: mysql.QueryError | null) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS movies (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      genre VARCHAR(100),
      duration INT,
      rating FLOAT,
      showtime DATETIME,
      language VARCHAR(100),
      image VARCHAR(255)
    );
  `;

  connection.query(createTableQuery, (err: mysql.QueryError | null, results: any) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table "movies" created or already exists.');
    }
    connection.end();
  });
});
