const express = require("express");
const app = express();

const bodyparser = require('body-parser');

const users = [
  {
    id: 1,
    name: "Ibrahim",
    email: "ibi@gmail.com",
  },
  {
    id: 2,
    name: "shehbaz",
    email: "dfghjk@gmail.com",
  },
  {
    id: 3,
    name: "ahmed",
    email: "ahm@gmail.com",
  },
  {
    id: 4,
    name: "bilal",
    email: "bilal@gmail.com",
  },
];
app.use(bodyparser.json());

app.get('/', (req, res, next)=>{
  res.status(200).json({message:'list', data:users})
})
app.post('/',(req, res, next)=>{
  const {id, name, email} = req.body;
  const newuser = {
    id:id,
    name:name,
    email:email
  }
  users.push(newuser);
  res.status(200).json({message: 'user added', data:newuser})
})

app.listen(2000, ()=>{
  console.log("this is running oon a http://localhost:2000")
})
