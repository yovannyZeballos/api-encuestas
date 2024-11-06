const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {

    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
    }

    const token = authorizationHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token no válido.' });
    }
};

module.exports = jwtMiddleware;