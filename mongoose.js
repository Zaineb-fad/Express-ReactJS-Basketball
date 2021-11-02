const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const DBURL =
  "mongodb://zaineb:95031285@cluster0-shard-00-00.hzsx7.mongodb.net:27017,cluster0-shard-00-01.hzsx7.mongodb.net:27017,cluster0-shard-00-02.hzsx7.mongodb.net:27017/basketball?ssl=true&replicaSet=atlas-1gygfc-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbSchema = mongoose.Schema({
  

  Firstname: String,
  Lastname: String,
  email: {type:String,unique:true},
  password: String,
  tel: Number,
  sexe:String,
  job:String


});

const Collectionss = mongoose.model("user", dbSchema);

exports.createUser = (data) => {
   return new Promise((resolve, reject) => {
    mongoose
      .connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async() => {
        try{
          const hashed = await bcrypt.hash(data.password,10)
          data.password = hashed
          console.log(data)
          const user = new Collectionss(data);
        return user.save();
        } catch(err){
          mongoose.disconnect()
          reject(err)
        }
        
      })
      .then(() => {
        mongoose.disconnect();
        resolve("utilisateur enregistrer");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

exports.signIn =(data)=>{
  return new Promise((resolve,reject)=>{
     mongoose
      .connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
        return Collectionss.findOne({email:data.email})
      }).then((user)=>{
        if(user){
          return bcrypt.compare(data.password,user.password)
        }else{
          mongoose.disconnect()
          reject({error:"invalidUser",message:"Utilisateur Invalid"})
        }
      }).then(match=>{
        if(match){
          mongoose.disconnect()
          resolve("Utilisateur vérifier")

        }else{
          mongoose.disconnect()
          reject({error:"invalidPassword",message:"Mot de passe incorrect"})
        }
      }).catch(err=>{
        mongoose.disconnect()
        reject(err)
      })
  })
}