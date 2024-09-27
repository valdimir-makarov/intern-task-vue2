const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api', productRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//32--33//34--36--38--39--41-43-45-46-47-