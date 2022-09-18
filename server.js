const axios = require('axios');
const express = require('express');
const PORT = 8080;
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World, Ohz You did it! ');
});

// GET DATA FROM API 

axios.get("https://reqres.in/api/users/2")
.then((result)=>{
    console.log(result.data);
}).catch((err)=>{
    console.log(err)
})

axios.get("/store",(req,res)=>{
    res.send("This is a store Page")
});

// POST DATA

axios.post("https://reqres.in/api/users",
  {
    name: "morpheus",
    job: "leader",
  })
  .then((result)=>{
    console.log(result.data);
  }).catch((err)=>{
    console.log(err);
  });



app.listen(PORT,()=>{console.log(`Running this Appilcation on Port ${PORT}`)})