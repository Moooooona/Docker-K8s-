const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://mongo-db/todolist',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    //useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})
