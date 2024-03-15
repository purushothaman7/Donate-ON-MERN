const express = require("express")
const cors=require("cors")

const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mongoConnect, User } = require("./mongo");


const port = process.env.PORT || 5000
app.use(cors())
mongoConnect();
app.use(express.json())

app.get('/signup',(req,res)=>{
    res.render('signup')
});
app.get('/login',(req,res)=>{    
    res.render('login')
});

app.post('/login', async (req, res) => {
    console.log("senti1");
      // console.log( req.body.name);
      const checking = await User.findOne({ roll: req.body.roll })
      // console.log(req.body.password);
      // console.log(checking.password);
      
      try {
          const result = await bcrypt.compare(req.body.password, checking.password);
          if (result) {
              const token = jwt.sign({ roll: req.body.roll }, "secret");
              rollNumbers = req.body.roll;
              
           
              res.json({ token });
  
              // res.json(req.body.roll)
             
              // res.json("exists")
              // req.session.user=true;
              // res.render("home",{naming:req.body.name});
          }
          else
              res.json("notexist");
      }
      catch (e) {
  
          // res.redirect("/login");
          console.log(e)

      }
  })


  app.post('/signup', async (req, res) => {
    
  console.log(req.body.name)
    const hash = await bcrypt.hash(req.body.pass, 10)

    const data = new User({
        roll: req.body.roll,
        password: hash,
        name : req.body.name
    })
    studName=req.body.name;
    
    try {
        const checking = await User.findOne({ roll: req.body.roll })
        if (checking) {
            res.json("exists")
        }
        else {
            // await data.save()
            // res.status(201).render("home", {
            //     naming: req.body.name
            // })

            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch (err) {
        console.log(err);
        // res.render("signup")
    }

})



  app.listen(port, () => {
    console.log("port connected ",port);
})