'use strict';

const data_controller = require('./data_controller.js');

module.exports = function (app) {
    app.route("/data")
        .get(data_controller.getData);
};
