const fs= require ('fs');
const path= require('path');
let products= JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

module.exports= {
    index :  (req,res) => res.render('index',{
        products
    }),
    detail: (req,res)=> {
  res.render('detalleMenu',{
product: products.find(products => products.id === +req.params.id)
   })

    }
   };