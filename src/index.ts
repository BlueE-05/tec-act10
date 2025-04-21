// Capas: db -> controller -> handler -> routes -> Postman
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;

import calcRoutes from '@/routes/calculations';

app.use('/api', calcRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));