const Sequelize =  require('sequelize');
const sequelize = new Sequelize('crud','root','',{                    // banco, user, password
    dialect: 'mysql',
    host:'localhost'

});



module.exports = sequelize;


