function authMiddleware(req, res, next) {
    const customHeader = req.headers['x-authorization'];

    // Verifica si el header está presente y es válido
    if (!customHeader || customHeader !== process.env.API_KEY) {
        // Si no está presente o no es válido, retorna un estado 401
        return res.status(401).send({message: 'No autorizado'});
    }
    // Si el header es válido, continúa con el siguiente middleware o ruta
    next();
}

module.exports = authMiddleware;