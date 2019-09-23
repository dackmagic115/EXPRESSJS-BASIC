const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json({extened : false}))

app.get('/' , (res , req) => {
    res.send('RESTful API Running')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use('/users' , require('./routes/api/users'))

const PORT = process.env.PORT || 4646

app.listen(PORT , () => console.log(`Server Running on PORT ${PORT}`))