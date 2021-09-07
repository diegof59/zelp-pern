const express = require("express")

const app = express()

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(
  '/api/restaurants',
  (request, response) => {
    console.log(`Restaurants from app`)
  }
)

app.get(
  '/api/restaurants/:id',
  (request, response) => {
    console.log(`Restaurant ${request.params.id}`)
  }
)

app.post(
  '/api/restaurants',
  (request, response) => {
    console.log(`New Restaurant ${request.body}`)
  }
)

app.put(
  '/api/restaurants',
  (request, response) => {
    console.log(`Update Restaurant ${request.body}`)
  }
)