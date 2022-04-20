var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var olavehicle_controller = require('../controllers/olavehicle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/olavehicles', olavehicle_controller.olavehicle_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/olavehicles/:id', olavehicle_controller.olavehicle_delete); 
 
// PUT request to update Costume. 
router.put('/olavehicles/:id', olavehicle_controller.olavehicle_update_put); 
 
// GET request for one Costume. 
router.get('/olavehicles/:id', olavehicle_controller.olavehicle_view_one_Page); 


 
// GET request for list of all Costume items. 
router.get('/olavehicles', olavehicle_controller.olavehicle_list); 
 
module.exports = router; 