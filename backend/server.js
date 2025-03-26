require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});