const express = require('express');
const router = express.Router();

const pool = require('../database');

// GET ALL FRAMEWORKS FROM DATABASE DB_FRAMEWORKS
router.get('/', async (req, res) => {
    pool.query('SELECT * FROM frameworks', (error, frameworks) => {
        if (error) throw error;
        res.send(frameworks);
    });
});

// POST FRAMEWORK WITH AUTO_INCREMENT ID ON DB_FRAMEWORKS
router.post('/', async (req, res) => {
    const { name, url, description } = req.body;

    const newFrame = {
        name,
        url,
        description
    };

    const response = await pool.query('INSERT INTO frameworks set ?', [newFrame]);
    res.send(response);
});


// DELETE FRAMEWORK BY ID ON DB_FRAMEWORK
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const response = await pool.query('DELETE FROM frameworks WHERE ID = ?', [id]);
    res.send(response);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const framework = await pool.query('SELECT * FROM frameworks WHERE id = ?', [id]);
    res.send(framework[0]);
});

router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, url} = req.body; 
    const newFrame = {
        name,
        description,
        url
    };
    const response = await pool.query('UPDATE frameworks set ? WHERE id = ?', [newFrame, id]);
    res.send(response);
});

module.exports = router;