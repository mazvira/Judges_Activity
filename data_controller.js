'use strict';

const fs = require('fs');
const csv = require('csv-parser');

exports.getData = function (req, res) {
    res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send('stat.csv');
};
