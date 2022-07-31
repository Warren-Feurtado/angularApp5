const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

//Define Collection and Schema
let BankDetails = new Schema({
    accountNum: {
        type: Number
    },
    bank: {
        type: String
    },
    branch: {
        type: String
    },
    accountType: {
        type: String
    }, 
    status: {
        type: String
    }, 
    studentId: {
        type: String
    }, 
},  {
    collection: 'studentBanking'
});

module.exports = mongoose.model('BankDetails', BankDetails);