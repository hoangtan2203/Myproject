const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    if(req.query.email==='vohoangtan2203@gmail.com'){
        res.json('dang nhap thanh cong')
    }
    res.send('dang nhap that bai')
    });
    router.get('/users',(req,res)=>{
        const users=[
            {
                id:1,
                name:'vohoangtan',
                email:'vohoangtan2203@gmail.com'
            },
            {
                id:2,
                name:'vohoangtan2',
                email:'vohoangtan220320@gmail.com'
            }
        ]
        res.json(users)
    })
    router.post('/users',(req,res)=>{
        console.log(req.body)
        res.json('a đây em')
        res.send('dang ky thanh cong')
    })
    router.put('/users/:id',(req,res)=>{
    
        if(Number(req.params.id)===2){
            res.send('chinh sửa thành công')
        }
        res.json('chinh sua that bai')
      
    });
    router.delete('/users/:id',(req,res)=>{
        if(Number(req.params.id)===1){
            res.send('xoa thanh cong')
        }
        res.json('xoa that bai')
    })

module.exports = router;