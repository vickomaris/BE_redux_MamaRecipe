
const express = require('express')
const { list, detail, insert, destroy, update, detailTitle, search } = require('../controller/recipe.controller')

const router = express.Router()

const uploadFoods = require('../middleware/photo_food')
const deleteFoods = require('../middleware/delete_foodfile')

router
  .get('/recipe', list)
  .get('/recipe/:id', detail)
  .post('/recipe/upload', uploadFoods, insert)
  .post('/recipe', uploadFoods, insert)
  .post('/recipe/:title', detailTitle)
  .get('/recipe/search/:title', search)
  .put('/recipe/:id', uploadFoods, update)
  .delete('/recipe/:id', destroy)

module.exports = router
