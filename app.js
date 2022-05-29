const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get('/api', (req, res)=>{
    res.json({msg:'default user', status:200});
});

app.get('/api/home', (req, res)=>{
    // res.send('home user').status(200);
    res.json({msg:'home user', status:200});
});

app.get('/api/dashboard', (req, res)=>{
    // res.send('dashboard route').status(200);
    res.json({msg:'dashboard user', status:200});
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});