const express = require('express');
const App = express();

const bodyparser = require ('body-parser');

let users=[
    {id:0, name:'Khizer', email:'khi@gmail.com'},
    {id:1, name:'Ibrahim', email:'ibi@gmail.com'},
    {id:2, name:'jahangir', email:'jani@gmail.com'},
];
const { v4: uuidv4 } = require('uuid');
App.use(bodyparser.json());

App.get('/users/:id',(req, res, next)=>{
    const uid = req.params.id;
    const identifyUser = users.find(u=>u.id==uid);

    if(identifyUser){
        res.status(200).json({message:'user fetched successfully', data:identifyUser})
    }
    else{
        res.status(500).json({message:'user is not found'})
    }
})
App.post('/users', (req, res, next)=>{
    const {name, email} = req.body;
    let createuser = {
        id: uuidv4(),
        name: name,
        email: email
    }
    users.push(createuser);
    if (!email || !name){
        return res.status(401).json({message:'could not create user' , success:false});
     }
     else{
        console.log('new user :' , createUser);
        res.status(200).json({success:true , message:'user added successfully!' , data:createUser});    
     }
})

app.delete('/users/:uid' , (req , res , next) => {

    const id = req.params.uid;

    const isUserPresent = users.find( u => u.id == id);

    if (isUserPresent){

        const deleteUser = users.filter(u => u.id != id);
        console.log('users list' , deleteUser);
    
        users = deleteUser;
        res.status(200).json({messgae:'user deleted successfully'});
        
    }
    else{
        res.status(400).json({messgae:'could not delete the user, user doesnt exists.'});
    }
})

App.listen(8000,()=>{
    console.log('Port is: http://localhost:8000');
})