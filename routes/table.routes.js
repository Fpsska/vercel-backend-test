const { Router } = require('express');
const db = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const alLData = await db.query('SELECT * FROM mockdata');
        res.json(alLData.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;