const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const  collection = require('./models/config')
const  equipment = require('./models/equipment')
const ejs = require('ejs')
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/index.html', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.post('/signup', async (req,res) => {
    try {
    const data = {
      fullname: req.body.fullname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    const existuser = await collection.findOne({username: data.username});

    if(existuser){
      res.send("user already exist.plz you can login")
      }else{
        const userdata = await collection.create(data);
        console.log("User saved:", userdata);
        res.send("Signup successful");
      }
    
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).send("Signup failed");
  }
})

app.post('/login', async (req,res) => {
  try {
    const checkuser = await collection.findOne({username: req.body.username});
    if(checkuser.username == req.body.username){
      if(req.body.password == checkuser.password){
        res.render('dashboard')
      }
    }
  } catch (error) {
     res.send('user is not exist plz signup',error)
  }
})


app.post('/dashboard', async (req,res) => {
    try {
    const eq = {
      equipmentname: req.body.equipmentname,
      discription: req.body.discription,
      price: req.body.price,
      imageurl: req.body.imageurl
    };
    const usereq = await equipment.create(eq);
    console.log("User saved:", usereq);
    res.send("inserted successful");
    
  } catch (error) {
    console.error("failed to insert", error);
    res.status(500).send("failed to insert");
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


