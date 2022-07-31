let express = require('express');
const app = express();
let studentRoute = express.Router();
let Student = require('../models/student'); //requiring a Mongoose Model

/**
 * //Mongoose Functions:
 *  // create(), findById(), findByIdAndUpdate(), findOneAndRemove // *
 */


studentRoute.route('/').get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

studentRoute.route('/create').post((req, res) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

studentRoute.route('/find/:id').get((req, res) => {
    Student.findById({_id: req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

studentRoute.route('/update/:id').put((req, res) => {
    Student.findByIdAndUpdate({_id: req.params.id}, req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

studentRoute.route('/remove/:id').delete((req, res) => {
    Student.findByIdAndRemove({_id: req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});


module.exports = studentRoute;