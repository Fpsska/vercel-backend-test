const express = require("express");
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const alLData = await db.query('SELECT * FROM mockdata');
        res.json(alLData.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;