import express from 'express'
import path from 'path'
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html')
})

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log('running on http://127.0.0.1:' + port)
})

module.exports = {
  server,
  app
}
