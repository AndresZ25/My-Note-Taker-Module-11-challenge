const path = require('path');
const express = require('express');
const router = express.Router();

// Route to serve notes.html
router.get('/notes', (req, res) => {
    console.log(2)
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router;