const express = require('express')
const config = require('config')
const path = require('path')


const app = express()

//app.use(express.json({ extended: true }))


app.get('/',()=>{
 console.log('get   /  ')
})


const PORT = 5555

 function start() {
  app.listen(PORT, () => console.log(`App has  been started on port ${PORT}...`))
}

start()