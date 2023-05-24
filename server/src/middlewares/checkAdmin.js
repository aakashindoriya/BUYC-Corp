const jwt = require('jsonwebtoken');

// Check admin middleware
function checkAdmin(req, res, next) {
    // Check if Authorization header is present
    const token = req.headers.authorization;
    if (!token) {
        // No token provided, proceed with empty user
        req.user = {};
        return next();
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Assign the role to req.user
        req.user = { ...decoded };

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Invalid token, proceed with empty user
        return res.status(404).send({ error: error.message })
    }
}


module.exports = checkAdmin