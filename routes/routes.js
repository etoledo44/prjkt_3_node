const express = require('express')
const router = express.Router()

const data = require('../controllers/data')

router.get('/', data.show)
router.post('/create', data.create)

module.exports = router