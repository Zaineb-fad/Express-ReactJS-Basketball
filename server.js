const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const { createUser,signIn } = require("./mongoose");
const session = require("express-session");
const SessionStore = require("connect-mongodb-session")(session);

const app = express();
const STORE = new SessionStore({
  uri:
    "mongodb://zaineb:95031285@cluster0-shard-00-00.hzsx7.mongodb.net:27017,cluster0-shard-00-01.hzsx7.mongodb.net:27017,cluster0-shard-00-02.hzsx7.mongodb.net:27017/basketball?ssl=true&replicaSet=atlas-1gygfc-shard-0&authSource=admin&retryWrites=true&w=majority",
  collection: "sessions",
});
app.use(cors());
app.use(
  session({
    secret: "this is my secret to hash express sessions .....",
    resave: true,
    saveUninitialized: false, //session created but not used
    cookie: {},
    store: STORE,
  })
);
app.use(express.json());
app.post(
  "/postData",
  bodyParser.urlencoded({
    extended: true,
  }),
  (req, res, next) => {
    const user = { ...req.body };
    delete user.item;
    console.log(user);
    createUser(user)
      .then((message) =>
        res.status(200).json({ ...req.body, message: message })
      )
      .catch((err) => console.log(err));
  }
);
app.post(
  "/signin",
  bodyParser.urlencoded({
    extended: true,
  }),
  (req, res, next) => {
    
   console.log(req.body)
    signIn(req.body)
      .then((message) =>{req.session.userEmail= req.body.email
                console.log(req.session)
                res.status(200).json({ ...req.body, message: message })}
      )
      .catch((err) => res.status(404).json(err));
  }
);
app.listen(5000, () => {
  console.log("listen on port 5000");
});
