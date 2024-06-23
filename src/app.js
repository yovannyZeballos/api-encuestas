const express = require('express');
const respuestaRoutes = require('./routes/respuestaRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/respuesta', respuestaRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});