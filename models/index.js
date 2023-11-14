const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}, //how many conection
});

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('Error'+err);
});