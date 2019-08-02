const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Connected"))

// router.route('/')
// .get()
// .post()
// .put()
module.exports = router;