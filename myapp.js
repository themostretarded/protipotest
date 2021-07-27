const express = require('express')
const app = express();

app.set('port',process.env.PORT||4000);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('')
})

app.get('/login',(req,res)=>{
    console.log(req.body);
})

app.post('/auth',(req,res)=>{
    let user = req.body.usuario;
    let contraseña = req.body.contraseña;
    typeof(user)
    res.render('./public/relatorio.html')
})

app.listen(app.get('port'),()=>{
  console.log('corriendo',app.get('port'))
});