const express = require("express")
const cors=require("cors")

const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const { mongoConnect, User } = require("./mongo");


const port = process.env.PORT || 5000
app.use(cors())
mongoConnect();

app.get('/signup',(req,res)=>{
    console.log("got")
res.render('signup')
});

app.post('/login', async (req, res) => {
    console.log("senti1");
      // console.log( req.body.name);
      const checking = await User.findOne({ roll: req.body.name })
      // console.log(req.body.password);
      // console.log(checking.password);
      
      try {
          const result = await bcrypt.compare(req.body.password, checking.password);
          if (result) {
              const token = jwt.sign({ roll: req.body.name }, "secret");
              rollNumbers = req.body.name;
              
           
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
    console.log(req.body)
  
    const hash = await bcrypt.hash(req.body.pass, 10)
console.log(req.body.name);
    const data = new User({
        roll: req.body.name,
        password: hash,
        name : req.body.roll
    })
    studName=req.body.roll;
    
    try {
        const checking = await User.findOne({ roll: req.body.name })
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
    console.log("port connected  $port");
})