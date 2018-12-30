const express = require('express');
const mongoose = require('mongoose');

var Student = require('./model/student');
var Course = require('./model/course');

var router = express.Router();

router.get('/students', (req, res, next)=> {
    Student.find((err, students)=> {
        res.json(students);
    })
});

router.post('/student', (req, res, next)=> {
    var studentModel = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    studentModel.save((err, student)=> {
        res.json({msg: "Successfully Saved!!!"});
    });
})

router.get('/courses', (req, res, next)=> {
    Course.find((err, courses)=> {
        res.json(courses);
    })
});

router.post('/course', (req, res, next)=> {
    var courseModel = new Course({
        name: req.body.name,
        duration: req.body.duration,
        trainer: req.body.trainer
    });

    courseModel.save((err, course)=> {
        res.json({msg: "Successfully Saved!!!"});
    });
})

var Router = module.exports = router;
