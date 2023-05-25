
function checkAdmin(req, res, next) {
    try {
        if (req.user.role == "admin") {
            return next()
        }
        res.status(403).send({ message: "opration not allowed" })
    } catch (error) {
        res.status(500).send({ message: "opration not allowed" })
    }

}
function checkOem(req, res, next) {
    try {
        if (req.user.role == "oem") {
            return next()
        }
        res.status(403).send({ message: "opration not allowed" })
    } catch (error) {
        res.status(500).send({ message: "opration not allowed" })
    }

}

module.exports = { checkAdmin, checkOem }