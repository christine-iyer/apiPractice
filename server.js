require('dotenv').config()

const express = require('express')
const path = require('path')


const PORT = process.env.PORT || 3008

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})


app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/portfolio', require('./routes/api/portfolio'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`I am listening on Port: ${PORT}`)
})



// get all assets
// app.get('/api/portfolio', (req, res) => {
//   var arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes"]
//   let randomItem = arr[Math.floor(Math.random() * arr.length)];
//   res.send(`<h1>${randomItem}</h1>`)
// });

