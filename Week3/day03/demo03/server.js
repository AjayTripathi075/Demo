const express = require("express");
const app=express();
const port =3000;
app.get('/',(req,resp)=>{
  resp.send("WElcome to Express demo");
})
app.post('/',(req,resp)=>{
  resp.send("CALLED :POST");
});
app.put('/',(req,resp)=>{
  resp.send("CALLED :Put");
});
app.delete('/',(req,resp)=>{
  resp.send("CALLED :Delete");
});

app.listen(port,()=>{
  console.log(`http://localhost:${port} Express server started `);;
})