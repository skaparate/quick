const express = require('express');
const adminRouter = express.Router();
const debug = require('debug')('app:adminRoutes');
const methodOverride = require('method-override');
const Student = require('../models/studentModel');
const Course = require('../models/courseModel');
const Result = require('../models/resultModel');
const User = require('../models/userModel');
const session = require('express-session');


adminRouter.route('/').get(isLoggedIn, (req, res) => {
    (async function fetchData() {
        try{
            let studentData = await Student.find({}, (err, students) => {
                err ? console.log(err) : students;
            });
            console.log(studentData);
            let resultData = await Result.find({}, (err, results) => {
                err ? console.log(err) : results;
            });

            let courseData = await Course.find({}, (err, courses) => {
                err ? console.log(err) : courses;
            })
    
            res.render('admin', {profiles: studentData, results: resultData, courses: courseData});
        } catch(err) {
            console.log(err);
        }
        
    })()
});

adminRouter.route('/new-course').get(isLoggedIn, (req, res) => {
    res.render('newCourse');
});

adminRouter.route('/new-course').post(isLoggedIn, (req, res) => {
    let {department, semester, code, title, units} = req.body;
    let newCourse = {department, semester, code, title, units};
    Course.findOne({
        department: department,
        semester: semester,
        code: code, title: title,
        units: units},
         (err, found) => {
        if (found == null) {
            Course.create(newCourse, (err) => {
                err ? console.log(err) : res.redirect('/admin');
            })
        } else {
            res.send('this course already exists');
        }
    });
})

adminRouter.route('/new-student').get(isLoggedIn, (req, res) => {
    Course.find({}, (err, courseData) => {
        err ? console.log(err) : res.render('newStudent', { courses: courseData});
    });
});

adminRouter.route('/new-result').get(isLoggedIn, (req, res) => {
    Course.find({}, (err, courseData) => {
        err ? console.log(err) : res.render('newResult', { courses: courseData});
    });
});



adminRouter.route('/new-result').post(isLoggedIn, (req, res) => {
    let {score, code} = req.body;
    let result = {score, code};
    Result.findOne({code : code}, (err, found) => {
        if (found == null) {
            Result.create(result, (err, result) => {
                err ? console.log(err) : res.redirect('/admin');
            })
        } else {
            found.score.push({matric: score.matric, status: score.status});
            found.save();
            res.redirect('/admin');
        }
    });
    
});


adminRouter.route('/new-student').post(isLoggedIn, (req, res) => {
    let { firstName, lastName, matric, programme, department, courses } = req.body;
    let newStudent = { firstName, lastName, matric, programme, department, courses };
    Student.create(newStudent, (err, student) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/admin#students');
        }    
    });
});

adminRouter.route('/students/:id').get(isLoggedIn, (req, res) => {
    (async function fetchProfile() {
        try {
            
            let studentData = await Student.findById(req.params.id, (err, data) => {
                err ? console.log(err) : data;
            });

            let courseData = await Course.find({}, (err, data) => {
                err ? console.log(err) : data;
            })
            res.render('profile', { profile: studentData, courses: courseData});

        } catch(err) {
            console.log(err);
        }
    })()
});

adminRouter.route('/results/:id').delete(isLoggedIn, (req, res) => {
    let target;
    Result.findOne({ 'score._id' : req.params.id }, (err, found) => {
        if (found == null) {
            console.log(err);
        } else {
            target = found.score.id(req.params.id);
            console.log(target);
            target.remove();
            found.save((err) => {
                err ? console.log(err) : res.redirect('/admin');
            })
        }
    })
});

adminRouter.route('/courses/:id').delete(isLoggedIn, (req, res) => {
    Course.findByIdAndDelete(req.params.id, err => {
        err ? console.log(err) : res.redirect('/admin');
    })
})



adminRouter.route('/students/:id/edit').get(isLoggedIn, (req, res) => {
    Student.findById(req.params.id, (err, data) => {
        err ? console.log(err) : studentData = data;
        Course.find({}, (err, courseData) => {
            err ? console.log(err) : res.render('editStudent', { profile: studentData, courses: courseData});
        });
    });
    
});

adminRouter.route('/students/:id').put(isLoggedIn, (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err) => {
        err ? console.log(err) : res.redirect('/admin');
    });
});

adminRouter.route('/students/:id').delete(isLoggedIn, (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err) => {
        err ? console.log(err) : res.redirect('/admin');
    })
})

//isLoggedIn middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
        res.redirect('/'); 
}




module.exports = adminRouter;