const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

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

app.get('/api/woolie', async (req, res)=>{
    // res.send('dashboard route').status(200);
    // res.json({msg:'register routes', status:200});

    // const product = await axios.get('https://www.woolworths.com.au/apis/ui/Search/products?searchTerm="salt"');
    // res.json({single:product.data.Products[0].Products[0], status:200});

    res.json({msg:'woolie routes', status:200});

});

app.get('/api/coles', async (req, res)=>{
    // res.send('dashboard route').status(200);
    // res.json({msg:'register routes', status:200});

    // const product = await axios.get('https://shop.coles.com.au/search/resources/store/20601/productview/bySearchTerm/salt?');
    // res.json({single:product.data.catalogEntryView[0], status:200});

    res.json({msg:'coles routes', status:200});

});


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../react-express-app-frontend-cicd/build','index.html'));
})
app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});