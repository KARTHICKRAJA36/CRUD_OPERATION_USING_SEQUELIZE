const sequelize=require("../config/db");
const {Sequelize,DataTypes}=require("sequelize")
const entrydetail=sequelize.define('entrydetail',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
          
})
sequelize.authenticate()
.then(()=>{
    console.log("connection done...");
})
.catch(()=>{
    console.log("error..");
})
sequelize.sync({alter:true})
.then(()=>{
    console.log("table synced...");
}).catch(()=>{
    console.log("error while syncing...");
})

module.exports=entrydetail;