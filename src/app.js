const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes/router');

const app = express();

app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Routes
app.use('/api', routes());

// Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
