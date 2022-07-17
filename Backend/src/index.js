require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { StatusCodes } = require('http-status-codes');

// const routes = 

const app = express();


app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((data, _req, res, _next) => {
  return res.json({ data: data, is_success: true });
});


app.use('/abha', require('./routes'));


app.use('*', (req, res) =>
  res.status(StatusCodes.NOT_FOUND).json({
    error: {
      message: 'not found',
    },
    is_success: false,
  })
);


app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);

