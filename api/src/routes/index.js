const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Que dise cabesa");
});


module.exports = router;