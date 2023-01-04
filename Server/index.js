const  express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require("mongoose");
const cors = require("cors")


//middlware
app.use(cors());
app.use(express.json());
app.use(require("./Router/rout"));

// mongodb connected
mongoose.connect('mongodb://localhost:27017/SignupAndLogin', {
    
  useNewUrlParser: true 

}).then(() =>{

    console.log("connected");

}).catch(() => {cls
    

    console.log("not connected")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))