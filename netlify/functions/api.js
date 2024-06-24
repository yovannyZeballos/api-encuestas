const express = require('express');
const apiRouter = express.Router();
const serverless = require('serverless-http');
const cors = require('cors');
const respuestaRoutes = require('./routes/respuestaRoutes');
const rolRoutes = require('./routes/rolRoutes');
const tribuRoutes = require('./routes/tribuRoutes');
const squadRoutes = require('./routes/squadRoutes');
const memberRoutes = require('./routes/memberRoutes');
const nivelCumplimientoRoutes = require('./routes/nivelCumplimientoRoutes');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
apiRouter.use('/', respuestaRoutes);
apiRouter.use('/', rolRoutes);
apiRouter.use('/', tribuRoutes);
apiRouter.use('/', squadRoutes);
apiRouter.use('/', squadRoutes);
apiRouter.use('/', memberRoutes);
apiRouter.use('/', nivelCumplimientoRoutes);

app.use('/.netlify/functions/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
module.exports.handler = serverless(app);

/*app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/