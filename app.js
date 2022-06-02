const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'../react-express-app-frontend-cicd/build')));


app.get('/api', (req, res)=>{
    res.json({msg:'default user', status:200});
});

app.get('/api/login', (req, res)=>{
    // res.send('home user').status(200);
    res.json({msg:'login routes', status:200});
});

app.get('/api/register', (req, res)=>{
    // res.send('dashboard route').status(200);
    res.json({msg:'register routes', status:200});
});


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../react-express-app-frontend-cicd/build','index.html'));
})
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});