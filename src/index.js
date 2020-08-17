
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { get } = require('http');

// Inicialización
const app = express();

// settings, configuraciones del servidor
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine', '.hbs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables Globales

app.use((req, res, next)=>{
    next();
})

// Routes, aquí vamos a definir las urls de nuestro servidor
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
// Public
app.use(express.static(path.join(__dirname, 'public')));

// Arrancar el servidor

app.listen(app.get('port'), ()=>{
    console.log("server on port", app.get('port'));
});


app.use(express.json());




app.get('/about', (req, res) =>{
    res.send("about tus muertos");
});



