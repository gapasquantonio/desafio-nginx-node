const express = require("express")
const app = express()
const port = 3000
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};
const mysql = require("mysql")



app.get("/",(req,res)=>{
  const connection = mysql.createConnection(config)
  const insert = `INSERT INTO people(name) values("Gabriel")`;
  const select = `SELECT * FROM people`;
  connection.query(insert)
  connection.query(select, (error, result, fields) => {
    console.log(result)
    if (error) throw error;
    let names= "<br><ul>";
    for (let i = 0; i < result.length; i++) {
        names += `<li>Nome: ${result[i].name}</li>`;
    }
    names += '</ul>';
    res.send(`<h1>Full Cycle Rocks!</h1> ${names}`);
  })
  connection.end();
})


app.listen(port,()=>{
    console.log("Rodando na porta " + port)
})