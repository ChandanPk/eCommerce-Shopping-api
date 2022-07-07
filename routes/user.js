const router = require('express').Router()
const { login_get, login_post } = require('./controllers/authControllers')

router.get("/", login_get)
router.post("/", login_post)

module.exports = router