// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/curro-nodeweb';
} else {
    urlDB = 'mongodb://admin:curro170390@ds143593.mlab.com:43593/curro-nodeweb', process.env.MONGO_URI;
}
process.env.URLDB = urlDB;