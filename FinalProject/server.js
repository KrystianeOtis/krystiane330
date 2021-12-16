const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router('./database.json');

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

// token timeout is set here
const expiresIn = '1m';

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {
        expiresIn
    });
}

// Verify the token
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => {
        if (err) {
            throw Error(err);
        } else {
            return decode;
        }
    });
}

server.use(router);

server.listen(3000, () => {
    console.log('Run Auth API Server');
});