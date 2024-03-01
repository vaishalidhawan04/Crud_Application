const express = require('express');
//const User = require('../models/Users');
const User = require('../models/Users2');
const router = express.Router();
const multer = require('multer');
//image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

//uplaod is a middleware here
var upload = multer({
    storage: storage,
}).single('image'); //bcoz we are uploading a single file at a time...this function contains the name attribute of input tag
//-----------------------

router.get('/', async (req, res)=>{
    let users = await User.find({});
    res.render('index', {users});
})

router.get('/add', async (req, res)=>{
    res.render('add_user');
})

router.post('/add', upload,  async (req, res)=>{
    let user = new User ({
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        image : req.file.filename,
    })
    
    await User.create(user);
    res.redirect('/');
})

router.get('/edit/:id', async (req, res)=>{
    let {id} = req.params;
    let foundUser = await User.findById(id);
    console.log(foundUser);
    res.render('edit_users', {foundUser});
})

module.exports = router;