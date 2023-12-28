// pages/api/getSchools.js
import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Test MySQL connection
      const connection = await db.getConnection();
      
      console.log('Connected to MySQL database');

      // Fetch data
      const [results, fields] = await db.query('SELECT * FROM schools');
      console.log('Query Results:', results);

      res.status(200).json(results);
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
