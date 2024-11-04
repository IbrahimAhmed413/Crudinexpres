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
app.delete('/:id', (req, res, next)=>{
  const nid = req.params.id;
  const founduser =  users.find((e)=>e.id==nid)
  if(founduser){
    const deleteduser = users.filter((u)=>u.id == nid)
    console.log("user deleted", deleteduser );
    res.status(200).json({message:'user deleted successfully', data:deleteduser})
  }else{
    console.log('chal choor')
  }
})
app.
app.listen(2000, ()=>{
  console.log("this is running oon a http://localhost:2000")
})
