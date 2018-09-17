/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Routed through Controller main.js' });
};

module.exports = {
  index
};