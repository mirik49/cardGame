const path = require('path');

module.exports = {
    entry: "./js/static/server-error.js",
    output: {
        path: path.resolve(__dirname, './public/static/js'),
        filename: "server-error.js"
    }
}
