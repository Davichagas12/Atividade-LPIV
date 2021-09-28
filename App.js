//const { appendFile } = require("fs")
import express from 'express'
import { equacao } from "./models/ExA.js"
import { calculo } from "./models/ExB.js"
const app = express()
let cal = calculo()
let eq = equacao()
app.use(express.json())

app.get("/", (req, res) =>{
    return res.json({teste: "teste bem sucedido de get"})
})

app.get("/ExA", (req, res) =>{
    const {num1, num2} = req.query
    const result = equacao(num1, num2)

    return res.json({"resultado":result})
})
app.get("/ExB", (req, res) =>{
    const {num1, num2} = req.query
    const result = calculo(num1, num2)

    return res.json({"resultado":result})
})

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/")
})
