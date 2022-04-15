var express = require('express'); 
const olavehicle_controlers= require('../controllers/olavehicle'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', olavehicle_controlers.olavehicle_view_all_Page ); 
module.exports = router; 