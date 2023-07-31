const express = require ('express')
const app = express ()
const path = require ('path')
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'files','index.html'));
})

// app.get('/new_page(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'new_page.html'));
// })
app.get('/new_page(.html)?',(req,res)=>{
    res.redirect('/news_page.html');
})

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));