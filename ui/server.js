import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('express ok')
})

app.post('/write-json', async (req, res) => {
  const data = req.body

  fs.writeFile('dist/components.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error writing file')
    } else {
      res.status(200).send('OK')
    }
  })
})

app.listen(2025)
console.log('listening on http://localhost:2205/')

export const viteNodeApp = app
