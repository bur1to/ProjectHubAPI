const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const {
  userRoutes,
  projectRoutes
} = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo is connected'))
  .catch((err) => console.log(`Connecting to Mongo is failed: ${err}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);

app.get('/', async (req, res, next) => {
  try {
    res.status(200).json({ message: 'Hello World' });
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
