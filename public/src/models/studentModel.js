const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nouquick');

 //create a Schema
 let studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    matric: String,
    department: String,
    programme: String,
    courses: Array
});

//create a model from the above Schema
let Student = mongoose.model('Student', studentSchema);

/*Student.create(
    {
        firstName: 'Jelili',
        lastName: 'Makinde',
        matric: 'NOU192004133',
        department: 'Information Technology'
    },
    (err, student) => {
        err ? console.log(err) : console.log(student);
    }
);*/

module.exports = Student;

