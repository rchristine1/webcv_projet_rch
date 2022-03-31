const express = require('express')
const app = express()
const port = 3000


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Bonjour. Pour accéder à la page du CV : http://localhost:3000/mon_Web_CV.html')
})

app.post('/send_contact', (req, res) => {
  res.send('Merci pour votre message. Nous vous confirmons son envoi.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
