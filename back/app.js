const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')

require('./db')

app.use(cors())
app.use(express.json())

// Routes 
const postRoutes = require('./routes/postRoutes')
app.use('/api/v1/posts', postRoutes)
//

app.get('/', (req,res) => {
    res.send('nothing to see here')
})

app.listen(port, () => {
    console.log(`serveur démarré sur http://localhost:${port}`)
})