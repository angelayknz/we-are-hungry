const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  request
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then((result) => {
      res.json(result.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

router.get('/', (req, res) => {
  request
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

router.get('/', (req, res) => {
  request
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

router.get('/', (req, res) => {
  request
    .then(() => {})
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

module.exports = router
