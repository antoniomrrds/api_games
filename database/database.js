const {Sequelize} = require('sequelize')


const connection =  new Sequelize('banco de dados','usuario  ','senha',{
    host:'o host ou ip' ,
    dialect:'mysql',
    timezone:'-03:00'
})

module.exports = connection;