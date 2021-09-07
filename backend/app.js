require('dotenv').config()
const express = require("express")

const app = express()
const db = require('./db')

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(
  '/api/restaurants',
  async (request, response) => {
    try{
      results = await db.query("SELECT * FROM restaurant")
      response.status(200).json({
        status: "Success",
        data: {
          restaurants: results.rows
        },
        results: results.rows.length
      })
    }catch(error){
      console.log(error)
    }
    console.log(`Restaurants from app`)
  }
)

app.get(
  '/api/restaurants/:id',
  async (request, response) => {
    try{
      results = await db.query(
        "SELECT * FROM restaurant WHERE id=$1",
        [request.params.id]
      )
      response.status(200).json({
        status: "Success",
        data: {
          restaurants: results.rows[0]
        },
      })
    }catch(error){
      console.log(error)
    }
  }
)

app.post(
  '/api/restaurants',
  async (request, response) => {
    try{
      results = await db.query(
        `INSERT INTO restaurant (name, location, price_range)
        VALUES ($1, $2, $3) RETURNING *`,
        [request.body.name, request.body.location, request.body.price_range]
      )
      response.status(200).json({
        status: "Success",
        data: {
          restaurants: results.rows[0]
        },
      })
    }catch(error){
      console.log(error)
    }
  }
)

app.put(
  '/api/restaurants/:id',
  async (request, response) => {
    try{
      results = await db.query(
        `UPDATE restaurant SET (name=$1, location=$2, price_range=$3)
        WHERE id=$4 RETURNING *`,
        [request.body.name, request.body.location,
          request.body.price_range, request.params.id]
      )
      response.status(200).json({
        status: "Success",
        data: {
          restaurants: results.rows[0]
        },
      })
    }catch(error){
      console.log(error)
    }
  }
)