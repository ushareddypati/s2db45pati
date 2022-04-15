var Olavehicle = require('../models/olavehicle'); 
 
// List of all Costumes 
exports.olavehicle_list = async function(req, res) { 
    try{ 
        theOlavehicles = await Olavehicle.find(); 
        res.send(theOlavehicles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Costume. 
exports.olavehicle_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Olavehicle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};
 
// Handle Costume create on POST. 
exports.olavehicle_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.olavehicle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.olavehicle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id); 
};

//VIEWS 
// Handle a show all view 
exports.olavehicle_view_all_Page = async function(req, res) { 
    try{ 
        theolavehicles = await olavehicle.find(); 
        res.render('olavehicles', { title: 'olavehicle Search Results', results: theolavehicles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST. 
exports.olavehicle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new olavehicle(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.olavehicle_type = req.body.wtype; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 