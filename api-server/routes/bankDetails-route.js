let express = require('express');
const app = express();
let BankingRoute = express.Router();
let studentBankDetails = require('../models/studentBanking') //requiring a Mongoose Model

/**
 * //Mongoose Functions:
 *  // create(), findById(), findByIdAndUpdate(), findOneAndRemove // *
 */


BankingRoute.route('/').get((req, res) => {
    studentBankDetails.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

BankingRoute.route('/add').post((req, res) => {
    studentBankDetails.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

BankingRoute.route('/find/:id').get((req, res) => {
    studentBankDetails.find({studentId: req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    });
});

//62d716e9d6b408de6067d91f

// BankingRoute.route('/update/:id').put((req, res) => {
//     studentBankDetails.findByIdAndUpdate({studentId: req.params.id}, req.body, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data);
//         } 
//     });
// });

// BankingRoute.route('/remove/:id').delete((req, res) => {
//     studentBankDetails.findByIdAndRemove({studentId: req.params.id}, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data);
//         } 
//     });
// });


module.exports = BankingRoute;