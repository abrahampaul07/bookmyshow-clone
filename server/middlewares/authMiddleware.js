const jwt = require('jsonwebtoken');

module.exports = function(req, res) {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.jwt_secret);
        req.body.userId = decoded.userId;
    } catch(err) {
        response.status(401).send({
            success: false,
            message: "Invalid token",
        })
    }
}