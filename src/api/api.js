import express from "express"
import bodyParser from "body-parser"

const app = express()
const PORT = 5000

// Bodyparser middleware
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*' }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Start app and listen in PORT
app.listen(PORT, () => console.log(`API up and running on port ${PORT}!`))
