const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const externalRouter = require('./routes/external');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/external', externalRouter)


const port = process.env.SERVER_PORT || 3000;
const server = process.env.SERVER_NAME || 'Facade-Template';

app.listen(+port, () => {
    console.log(`${server} started with port:${port}`);
});

