const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('public'));

app.get('/login',(req,res)=>{
    console.log(req.body);
})

app.post('/auth',(req,res)=>{
    let user = req.body.usuario;
    let contraseña = req.body.contraseña;
    typeof(user)
    res.render('./public/relatorio.html')
})