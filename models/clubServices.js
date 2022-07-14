const db = require(".");
const {Model, Sequelize} = require('sequelize');


module.exports=(sequelize,DataTypes)=>{
    class clubServices extends Model{
        static associate(models){
            /* ticket.hasMany(models.ticketName,{foreignKey:"ticket_id"}) */ 
            /* ticket.hasMany(models.booking,{foreignKey:"ticket_id"}) */
        }
    }
    clubServices.init({
        club_id:{
            type:DataTypes.INTEGER
        },
        ticketName:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        noOfTicketAvailable:{
            type:DataTypes.INTEGER
        },
        originalPrice:{
            type:DataTypes.INTEGER
        },
        price:{
            type:DataTypes.INTEGER
        },
        noOfTicketRemain:{
            type:DataTypes.INTEGER
        },
        priceFor:{
            type:DataTypes.STRING
        },
        minLimit:{
            type:DataTypes.INTEGER
        },
        maxLimit:{
            type:DataTypes.INTEGER
        }
    },{sequelize:sequelize,modelName:'clubServices'})
    return clubServices
}