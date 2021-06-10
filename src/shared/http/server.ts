import express from 'express';

const app = express();

app.get('',(request,response)=>{
    response.json({message:"Ola dev bem vindo de novo ao node typescript"});
});

app.listen(3333,()=>{
    console.log("Api rodando ...");
});
