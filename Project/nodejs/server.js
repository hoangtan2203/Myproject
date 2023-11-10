const express= require('express');
const router = require('./router.js');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
const port=8000;
app.use('/api',router)

app.listen(port,()=>{
console.log('ok')
});