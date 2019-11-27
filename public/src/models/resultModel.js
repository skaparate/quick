const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nouquick');

//create a course schema
let resultSchema = new mongoose.Schema({
    code: String,
    score: [
        {
            matric: String,
            status: String
        }
    ]
});

let Result = mongoose.model('Result', resultSchema);

/*Result.create({
    code: 'CIT802',
    score: [
        {
            matric: 'NOU192004133',
            status: 'C'
        }
    ]
},
    (err, result) => {
        err ? console.log(err) : console.log(result);
});
*/
module.exports = Result;

