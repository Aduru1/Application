const express = require('express')
const router = express.Router()
const SignUpTemplate =require('../models/SignUpModels')


router.post('/signup',(request,response)=>{
    const signedUpUser =new SignUpTemplate({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password,
        image:request.body.image
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .then (error =>{
        response.json(error)
    })

})

module.exports = router











