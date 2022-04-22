var express = require('express'); 
const olavehicle_controlers= require('../controllers/olavehicle'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
 
/* GET costumes */ 
router.get('/', olavehicle_controlers.olavehicle_view_all_Page ); 
module.exports = router; 

/* GET detail costume page */
router.get('/detail', olavehicle_controlers.olavehicle_view_one_Page);

/* GET create costume page */
router.get('/create', olavehicle_controlers.olavehicle_create_Page);

/* GET create update page */
router.get('/update', olavehicle_controlers.olavehicle_update_Page);

/* GET delete costume page */
router.get('/delete', olavehicle_controlers.olavehicle_delete_Page);
/* GET update costume page */ 
router.get('/update',secured, olavehicle_controlers.olavehicle_update_Page); 

