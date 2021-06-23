const express = require('express')
const app = express()
const port = 5000

let date = new Date();
let hours = date.getHours()
let days = date.getDay()

app.use((req, res, next) => {
    if (hours < 9 || hours > 17 || days === 6 || days === 0) {
    return res.send("<h1 style='color:red ; text-align:center'</h1>Out Of Service")
        
     
    }
  next()   
})




app.use(express.static('public'))
app.listen(port, () =>
console.log(`app running on port : ${port}`))