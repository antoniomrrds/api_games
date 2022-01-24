const {Sequelize} = require('sequelize')


const connection =  new Sequelize('api_games','scorpion','Reis23101996',{
    host:'MARK-85' ,
    dialect:'mysql',
    timezone:'-03:00'
})

module.exports = connection;