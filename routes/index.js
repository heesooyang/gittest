var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    render(req, res, next);
});

router.get('/*', function (req, res, next) {
    render(req, res, next);
});

function render (req, res, next) {
    // res.sendFile(path.resolve("public/index.html"));
    if (req.get('host').indexOf('localhost') == -1) {
        res.render('hs');
    } else {
        res.render('jh');
    }
}

module.exports = router;