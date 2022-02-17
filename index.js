const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'views','map.html'));});
app.listen(PORT,()=>console.log("Server started"))
