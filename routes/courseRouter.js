const courseController = require('../controllers/courseController')

const router = require('express').Router()

router.post('/addCourses' , courseController.addCourses)

router.get('/getAllCourses' , courseController.getAllCourses)

router.get('/:id' , courseController.getOneCourse)

router.put('/:id', courseController.updateCourse)

router.delete('/:id' , courseController.deleteCourse)

module.exports = router 