var Olavehicle = require('../models/olavehicle');

// List of all Costumes 
exports.olavehicle_list = async function (req, res) {
    try {
        theOlavehicles = await Olavehicle.find();
        res.send(theOlavehicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific Costume. 
exports.olavehicle_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Olavehicle.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};



// Handle Costume delete on DELETE. 
exports.olavehicle_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Olavehicle.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle OlaVehicle update form on PUT. 
exports.olavehicle_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Olavehicle.findById(req.params.id)
        // Do updates of properties 
        if (req.body.vehiclenumber)
            toUpdate.vehiclenumber = req.body.vehiclenumber;
        if (req.body.numberofpassengers) toUpdate.numberofpassengers = req.body.numberofpassengers;
        if (req.body.amount) toUpdate.amount = req.body.amount;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

//VIEWS 
// Handle a show all view 
exports.olavehicle_view_all_Page = async function (req, res) {
    try {
        theolavehicles = await olavehicle.find();
        res.render('olavehicles', { title: 'olavehicle Search Results', results: theolavehicles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST. 
exports.olavehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Olavehicle();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.vehiclenumber = req.body.vehiclenumber;
    document.numberofpassengers = req.body.numberofpassengers;
    document.amount = req.body.amount;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.olavehicle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Olavehicle.findById(req.query.id)
        console.log(result)
        res.render('olavehicledetail', { title: 'Olavehicle Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a olavehicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.olavehicle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('olavehiclecreate', { title: 'Olavehicle Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}


// Handle building the view for updating a costume.
// query provides the id
exports.olavehicle_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Olavehicle.findById(req.query.id)
        res.render('olavehicleupdate', { title: 'Olavehicle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.olavehicle_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Olavehicle.findById(req.query.id)
        res.render('olavehicledelete', {
            title: 'Ola Vehicle Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
