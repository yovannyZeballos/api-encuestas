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
const adminRoutes = require('./routes/adminRoute');
const authRoutes = require('./routes/authRoute');
const authMiddleware = require('./middlewares/authMiddleware');
const jwtMiddleware = require('./middlewares/jwtMiddleware');

require('dotenv').config();

const app = express();
app.use(cors());
apiRouter.use(cors());

// Middleware
app.use(express.json());
//app.use(authMiddleware);

// Routes
apiRouter.use('/respuesta-poclac', authMiddleware, respuestaPoclacRoutes);
apiRouter.use('/rol', authMiddleware, rolRoutes);
apiRouter.use('/tribu', authMiddleware, tribuRoutes);
apiRouter.use('/squad', authMiddleware, squadRoutes);
apiRouter.use('/member', authMiddleware, memberRoutes);
apiRouter.use('/nivel-cumplimiento', authMiddleware, nivelCumplimientoRoutes);
apiRouter.use('/encuesta', authMiddleware, encuestaRoutes);
apiRouter.use('/pregunta', authMiddleware, preguntaRoutes);
apiRouter.use('/respuesta', authMiddleware, respuestaRoutes);
apiRouter.use('/admin', authMiddleware, jwtMiddleware, adminRoutes);
apiRouter.use('/auth', authMiddleware, authRoutes);

app.use('/.netlify/functions/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
module.exports.handler = serverless(app);

/*app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/