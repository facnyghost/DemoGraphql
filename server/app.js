const express = require('express')
const {graphqlHTTP} =require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();


app.use(cors())
mongoose.connect('mongodb+srv://mlio:e5050@cluster0.8abiu.mongodb.net/merchant?retryWrites=true&w=majority')
mongoose.connection.once('open', ()=>{
    console.log('Connected to database done!!')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(4000, ()=>{
    console.log("now server is live")
})