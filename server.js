const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const pkg = require('./package.json')
const version = pkg.version
const fetch = require('node-fetch')

const app = express()

const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://parking.firebaseio.com',
})

//add other middleware

app.use(express.static('dist'))
// app.use('/react', express.static('react-app/build'))
// app.use(express.static('vue-app/dist'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

app.get('/api/firebase/random', async (req, res) => {
  let docRef1 = db.collection(`X`).doc(`XX`)
  await docRef1.set({ hello: `world: ${new Date().getTime()}` })
  res.status(200).send('firebase !')
})

app.get('/api', (req, res) => {
  res.status(200).send(`Welcome to webapp-starter api v${version}`)
})

app.get('/query', (req, res) => {
  // console.log(req.originalUrl)
  // console.log(req.query)

  fetch(`http://database.trwl.club:8086${req.originalUrl}`)
    .then((res) => res.json())
    .then((json) => {
      // console.log(json)
      for (const result of json.results) {
        console.log(`> [statement_id] `, result.statement_id)
        for (const ds of result.series) {
          console.log(ds.name)
          console.log(ds.columns)
          // console.log(ds.values)
        }
      }
      res.status(200).send(json)
    })
})

app.get('/api/version', (req, res) => {
  res.status(200).send(`${version}`)
})

app.post('/api/line/webhook', require('./server.line.js').webhook)

const paths = app._router.stack.filter((v) => v.route).map((v) => v.route.path)

paths.forEach((path, idx) => {
  console.log(`[${idx}] -> ${path}`)
})

// console.log(process.env)
//start app
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`App ${version} is listening on port ${port}.`))
