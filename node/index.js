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
const connection = mysql.createConnection(config)



app.get("/",(req,res)=>{
  const sql = `INSERT INTO people(name) values("Gabriel")`
  connection.query(sql)
  connection.query(`SELECT * FROM people`, (error, result, fields) => {
    console.log(result)
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!result.length ? result.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})


app.listen(port,()=>{
    console.log("Rodando na porta " + port)
})