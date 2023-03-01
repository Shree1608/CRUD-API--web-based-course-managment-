

const{Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize('bhagyashreec','bhagyashreec','G5xdLxWpR0Dy9L9x0159',{
    host : '15.206.7.200',
    port : '3310',
     dialect : 'mysql' 
 });


sequelize.authenticate()
.then( () =>{
    console.log("connected");
})
.catch(err => {
    console.log("error"+err);
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.courses = require('./courses')(sequelize ,DataTypes);

db.sequelize.sync()
.then( () =>{
    console.log("yess");
})

module.exports = db