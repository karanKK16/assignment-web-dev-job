// pages/api/submitForm.js
import { createConnection } from 'mysql2';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name,contact, address,city,state,email, image } = req.body;

  // Replace these values with your MySQL database credentials
  const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Karan@123',
    database: 'schools',
  });

  try {
    await db.promise().query('INSERT INTO schools (name,contact, address,city,state,image,email) VALUES (?,?,?,?,?,?,?)', [name,contact, address,city,state, image,email]);
    res.status(200).json({ message: 'Form data successfully submitted to the database.' });
  } catch (error) {
    console.error('Error submitting form data to the database:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    db.end();
  }
}
