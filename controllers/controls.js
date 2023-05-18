const db=require("../config/db");
const entrydetails=require("../models/query");

const create=(req,res)=>{
    const{id,username,password}=req.body
    entrydetails.create({
       id:id,
       username:username,
       password:password
    }).then(()=>{
        res.send("data added successfully...");
    }).catch(()=>{
        res.send("failed to add data...");
    })
}
const alluser=(req,res)=>{
    entrydetails.findAll().then((details)=>{
        res.send(details)
    }).catch((error)=>{
        res.send("no datas found...")
    })
}
const update =async (req, res) => {
    const id = req.params.id;
    const username  = req.params.username;
    const imagefile=req.file
    console.log(id);
    console.log(username);
    console.log(imagefile);
    const find =await  entrydetails.findOne({ where: { id:id } })
    console.log(find)
    if(find){
        entrydetails.update({ username:username,image:imagefile},{ where: {id : id } })
        res.send(imagefile)
    }
      
    else{
        res.send('error to update')
    }
} 
const deletedata = (req,res)=>{
    const id=req.body.id;
    entrydetails.destroy({where:{id: id}}).then(()=>{
        res.send("data deleted successfully....")
    }).catch((error)=>{
        res.send("failed to delete data....")
    })

}

module.exports={
    create,
    alluser,
    update,
    deletedata
}