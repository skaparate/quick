const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nouquick');

//create a course schema
let courseSchema = new mongoose.Schema({
    department: String,
    semester: Number,
    code: String,
    title: String,
    units: Number
});

//create a model from the above Schema
let Course = mongoose.model('Course', courseSchema);

/*Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 191,
    code: 'CIT811',
    title: 'User Interface Design and Ergonomic',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 191,
    code: 'CIT831',
    title: 'Software Engineering Methodologies',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 191,
    code: 'CIT843',
    title: 'Introduction to Database Management',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 191,
    code: 'CIT851',
    title: 'Advanced Systems Analysis And Design',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);*/

/*Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT8',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);
Course.create(
    {
    department: 'Information Technology',
    semester: 192,
    code: 'CIT802',
    title: 'Technical Report Writing',
    units: 3,
    },
    (err, course) => {
        err ? console.log(err) : console.log(course);
    }
);*/

module.exports = Course;
