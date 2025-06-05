const express = require('express');

class ExpressHandler {
    constructor() {
        console.log('ExpressHandler')
        this.app = express();
        this.app.use(express.json());
    }
    getExpress() {
        return this.app;
    }

}

module.exports = ExpressHandler;