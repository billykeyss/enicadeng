var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET project1 page. */
router.get('/project1', function(req, res, next) {
  res.render('project1', { title: 'Express' });
});

/* GET project2 page. */
router.get('/project2', function(req, res, next) {
  res.render('project2', { title: 'Express' });
});

/* GET project3 page. */
router.get('/project3', function(req, res, next) {
  res.render('project3', { title: 'Express' });
});

/* GET concept1 page. */
router.get('/concept1', function(req, res, next) {
  res.render('concept1', { title: 'Express' });
});

/* GET project2 page. */
router.get('/concept2', function(req, res, next) {
  res.render('concept2', { title: 'Express' });
});

/* GET concept3 page. */
router.get('/concept3', function(req, res, next) {
  res.render('concept3', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
