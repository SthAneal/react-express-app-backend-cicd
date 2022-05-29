const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get('/', (req, res)=>{
    res.send('default route');
});

app.get('/home', (req, res)=>{
    res.send('home route');
});

app.get('/dashboard', (req, res)=>{
    res.send('dashboard route');
});

app.listen(3000, ()=>{
    console.log('server is running on port 5000');
});