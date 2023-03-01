const { courses } = require('../models');
const db = require('../models'  )

const Courses = db.courses

// create courses
 const addCourses = async(req , res)=>{
    let info = {
        CourseName : req.body.CourseName ,
        CourseDuration : req.body.CourseDuration ,
        CourseFees : req.body.CourseFees ,
    }
    const courses = await Courses.create(info)
    res.status(200).send(courses)
 }

 // get courses
 const getAllCourses = async(req  ,res) => {
    let courses = await Courses.findAll({})
    res.status(200).send(courses)
 }

 // get single course
 const getOneCourse = async(req  ,res) => {
    let id = req.params.id
    let courses = await Courses.findOne({ where : {id : id }})
    res.status(200).send(courses)
 }

 // update course
 const updateCourse = async(req,res) =>{
    let id = req.params.id 
    const courses = await Courses.update(req.body, {where : {id :id }} ) 
    res.status(200).send("updated")
}
  // dalete course 
 const deleteCourse = async(req,res) =>{
    let id = req.params.id 
    await Courses.destroy( {where : {id :id }} ) 
    res.status(200).send("course deleted")
}

module.exports = {
    addCourses ,
    getAllCourses ,
    getOneCourse ,
    updateCourse ,
    deleteCourse
}