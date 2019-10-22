const express = require('express');
const app = express();
const cors = require('cors')
const dotEnv = require('dotenv');
const apiRouter = require('./routes/api')
const favRoute = require('./routes/favourite')

dotEnv.config()

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Page, HaPpy HAcKiNg</h1>')
});
app.use('/user', apiRouter)
// Favourite video router for api
app.use('/movie', favRoute)

// Start server
app.listen(process.env.PORT || 3000, ()=>{
  console.log('App started running in port', process.env.APP_PORT)
})
