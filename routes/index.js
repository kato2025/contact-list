const express = require('express');
const pool = require('../db'); // Import the pool from db.js
const router = express.Router();

// Display messages (GET request)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts');
    res.render('index', { title: 'Contact List', contacts: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Contacts cannot be displayed because the Server cannot be reached');
  }
});

// Display form to create a new contact (GET request)
router.get('/new', (req, res) => {
  res.render('form', { title: 'Add New Contact' });
});

// Handle creating a new contact (POST request)
router.post('/new', async (req, res) => {
  const { name, phone_number_1, phone_number_2, email, location } = req.body;
  try {
    await pool.query(
      'INSERT INTO contacts (name, phone_number_1, phone_number_2, email, location) VALUES ($1, $2, $3, $4, $5)',
      [name, phone_number_1, phone_number_2, email, location]
    );
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Contact cannot be posted to database because the Server canot be reached');
  }
});

// Edit contact form (GET request)
/*
router.get('/edit/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [req.params.id]);
    if (result.rows.length > 0) {
      res.render('edit', { title: 'Edit Contact', contacts: result.rows[0] });
    } else {
      res.status(404).send('Contact not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Contact cannot be edited because the Server cannot be reached');
  }
});
*/

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    const contact = result.rows[0];
    
    if (!contact) {
      return res.status(404).send('Contact not found');
    }

    res.render('edit', { title: 'Edit Contact', contact });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Handle updating an existing contact (POST request)

router.post('/edit/:id', async (req, res) => {
  const { name, phone_number_1, phone_number_2, email, location } = req.body;
  try {
    await pool.query(
      'UPDATE contacts SET name = $1, phone_number_1 = $2, phone_number_2 = $3, email = $4, location = $5 WHERE id = $6',
      [name, phone_number_1, phone_number_2, email, location, req.params.id]
    );
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Contact cannot be updated because the Server cannot be reached');
  }
});


// Delete contact (POST request)
router.post('/delete/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [req.params.id]);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Contact cannot be deleted because the Server cannot be reached');
  }
});

module.exports = router;