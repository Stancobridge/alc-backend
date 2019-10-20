const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const apiRouter = require('./routes/api')

dotEnv.config()

app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Page, HaPpy HAcKiNg</h1>')
});
app.use('/user', apiRouter)

// Start server
app.listen(process.env.APP_PORT, ()=>{
  console.log('App started running in port', process.env.APP_PORT)
})
