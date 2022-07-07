module.exports.login_get = (req, res) => {
    res.send("Still wotking")
}

module.exports.login_post = (req, res) => {
    const body = req.body
    res.json(body)
}