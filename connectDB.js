const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('admin', 'postgres', 'Jyothi', {
  host: 'localhost',
  dialect:'postgres'
});
const connect=async()=>{
    return sequelize.authenticate();
}
module.exports={
    connect,
    sequelize
}