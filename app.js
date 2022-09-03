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

app.get('/api/woolie',  async (req, res)=>{
    const product = await axios.get(`https://www.woolworths.com.au/apis/ui/Search/products?searchTerm="${req.query.value}"`);
    const result = product.data.Products;
    
    let items = result.map((item)=>{
        return({
            name:item.Products[0].DisplayName, 
            description:item.Products[0].Description,
            price:item.Products[0].Price,
            // image:item.Products[0].DetailsImagePaths
            image:item.Products[0].MediumImageFile
        })
    })

    res.json({
        items,
        status:200
    });
    
    // console.log({single:product.data.Products[0].Products[0], status:200});
    // const result = product.data.Products[1].Products;
    //console.log(result); // good for checking available result set

    // let items = [];

    // res.json({
    //     name:product.data.Products[0].Products[0].DisplayName, 
    //     description:product.data.Products[0].Products[0].Description,
    //     price:product.data.Products[0].Products[0].Price,
    //     status:200
    // });
});

app.get('/api/coles',  async (req, res)=>{
    // res.send('dashboard route').status(200);
    // res.json({msg:'register routes', status:200});

    // res.json({msg:'coles routes', status:200});
    const product = await axios.get(`https://shop.coles.com.au/search/resources/store/20601/productview/bySearchTerm/${req.query.value}?`);
    const result = product.data.catalogEntryView;
    
    console.log(JSON.stringify(result[1])+'\n');
    console.log(JSON.stringify(result[2])+'\n');
    console.log(JSON.stringify(result[3])+'\n');
    console.log(JSON.stringify(result[5]));



    
    let items = result.map((item)=>{
        return({
            name:item.n, 
            description:item.s,
            price:item.u2,
            isSpecial:item.pt?true:false,
            image:item.t? `https://shop.coles.com.au${item.t}`:''
        })
    });

    // console.log(items[0]);


    res.json({
        items,
        status:200
    });

});


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../react-express-app-frontend-cicd/build','index.html'));
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});