const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/projMan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("We have got into the Main frame. Awaiting Orders:"))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))


//set up like this  change projMan in line 2