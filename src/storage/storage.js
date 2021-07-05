const app = require('../app');
const serveStatic = require('serve-static');
const { constants } = require('../config/Constants');

module.exports = () => {

    const storage = `${process.cwd()}/${constants.PUBLIC_STORAGE_DIRECTORY}/`;

    app.use(serveStatic(storage));
    
}

