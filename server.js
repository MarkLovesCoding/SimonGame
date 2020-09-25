const express = require('express');
const app = express();

const port = 3000;
const sass = require('node-sass');
// const fs = require('fs');
// const path = require('path');
var router = express.Router()

app.use(express.static(process.cwd()+'/public/'));
app.use(express.static(process.cwd()+'/src/'));


app.get('/',(req,res)=>{
  res.sendFile(process.cwd() + '/public/simon.html' );
});




var listener = app.listen(port,()=>{
  console.log("Listening on "+ port)

})
