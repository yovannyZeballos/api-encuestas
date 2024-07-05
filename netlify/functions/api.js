const express = require('express');
const apiRouter = express.Router();
const serverless = require('serverless-http');
const cors = require('cors');
const respuestaPoclacRoutes = require('./routes/respuestaPoclacRoutes');
const rolRoutes = require('./routes/rolRoutes');
const tribuRoutes = require('./routes/tribuRoutes');
const squadRoutes = require('./routes/squadRoutes');
const memberRoutes = require('./routes/memberRoutes');
const nivelCumplimientoRoutes = require('./routes/nivelCumplimientoRoutes');
const encuestaRoutes = require('./routes/encuestaRoutes');
const preguntaRoutes = require('./routes/preguntaRoutes');
const respuestaRoutes = require('./routes/respuestaRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
apiRouter.use('/', respuestaPoclacRoutes);
apiRouter.use('/', rolRoutes);
apiRouter.use('/', tribuRoutes);
apiRouter.use('/', squadRoutes);
apiRouter.use('/', squadRoutes);
apiRouter.use('/', memberRoutes);
apiRouter.use('/', nivelCumplimientoRoutes);
apiRouter.use('/', encuestaRoutes);
apiRouter.use('/', preguntaRoutes);
apiRouter.use('/', respuestaRoutes);

app.use('/.netlify/functions/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
module.exports.handler = serverless(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});