// const express = require("express");
// const router = express.Router();
// const User = require('../models/Users');
// const multer = require("multer");

// //image upload
// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './public/uploads');
//     },
//     filename: function(req, file, cb){
//         cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// });

// //uplaod is a middleware here
// var upload = multer({
//     storage: storage,
// }).single('image'); //bcoz we are uploading a single file at a time...this function contains the name attribute of input tag
// //-----------------------






// //-----------Insert an user into database route----------------------
// router.post('/add', upload, async (req, res)=>{
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         image: req.file.filename,
//     });
    
//     await User.create(user);
//     res.redirect('/');
    
    
// })
// //---------------------------------
// router.get('/', async(req, res)=>{
//     //res.send("<h1>Home Page</h1>");
//     // res.render("index", { title :  'Home Page'});
//     //let{id} = req.params;
//     let users = await User.find(); 
//     //console.log(user);
//     res.render('index', 
//     {title: "Home Page",
//     users: users});
// })



// router.get('/add', (req, res)=>{
//     res.render('add_user', {title: "Add Users"});
// })

// router.get('/edit/:id', async (req, res)=>{
//     let {id} = req.params;
//     let foundUser = await User.findById(id);
//     console.log(foundUser);
//     res.render('edit_users', {foundUser});
// })


// // router.get('/edit/:id', (req, res)=>{
// //     let id = req.params.id;
// //     User.findById(id, (err, foundUser)=>{
// //         if(err){
// //             res.redirect('/');
// //         }else{
// //             if(foundUser==null){
// //                 res.redirect('/');
// //             }
// //             else{
// //                 res.render('edit_users', {title: 'Edit User', foundUser:foundUser})
// //             }
// //         }
        
// //     })
    
// // })



// module.exports = router;
