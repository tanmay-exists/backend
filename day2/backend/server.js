import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Server is readyy')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'B joke',
      content: 'This is second joke'
    }
  ]
  res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server at http:localhost:${port}`)
})
