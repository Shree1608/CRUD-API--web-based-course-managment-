module.exports = (sequelize , DataTypes) =>{
    const Courses = sequelize.define("courses" ,{
        CourseName : DataTypes.STRING ,
        CourseDuration : DataTypes.STRING ,
        CourseFees :DataTypes.INTEGER
     }
    );
    return Courses
}