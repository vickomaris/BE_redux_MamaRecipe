/* eslint-disable camelcase */

const recipeModel = require('../model/recipe.model')
const { success, failed } = require('../helper/response')

const cloudinary = require('../helper/cloudinary')
const recipeController = {
  // list: (req, res) => {
  //   const page = parseInt(req.query.page) || 1
  //   const limit = parseInt(req.query.limit) || 3
  //   const offset = (page - 1) * limit
  //   recipeModel.selectAll(limit, offset)
  //     .then((result) => {
  //       res.json(result)
  //     }).catch((err) => {
  //       res.json(err)
  //     })
  // },
  list: (req, res) => {
    const sort = req.query.sort
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 3
    const offset = (page - 1) * limit
    recipeModel.selectAll(sort, limit, offset)
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    recipeModel.selectDetail(id).then((result) => {
      res.json(result.rows)
    }).catch((err) => {
      res.json(err)
    })
  },

  detailTitle: (req, res) => {
    const title = req.params.title
    recipeModel.selectDetailTitle(title).then((result) => {
      res.json(result.rows)
    }).catch((err) => {
      res.json(err)
    })
  },

  search: async (req, res) => {
    const title = req.params.title
    const getRecipes = await recipeModel.selectSearch(title)
    try {
      res.json(getRecipes.rows)
    } catch (err) {
      res.json(err)
    }
  },

  // insert: (req, res) => {
  //   const { title, ingredients, photo, video, created_at } = req.body
  //   recipeModel.store(title, ingredients, photo, video, created_at).then((result) => {
  //     res.json(result)
  //   }).catch((err) => {
  //     res.json(err)
  //   })
  // },

  // insert photo
  insert: async (req, res) => {
    try {
      // image
      const photo = await cloudinary.uploader.upload(req.file.path)
      // tangkap data dari body
      const { title, ingredients, video } = req.body
      console.log(photo)
      const data = {
        title,
        ingredients,
        photo,
        video,
        photo_url: photo.url,
        photo_public_id: photo.public_id,
        photo_secure_url: photo.secure_url
      }
      console.log(data)
      recipeModel.store(data).then((result) => {
        success(res, result, 'success', ' success add recipe')
      }).catch((err) => {
        failed(res, err.message, 'failed', 'failed add recipe')
      })
    } catch (err) {
      failed(res, err.message, 'failed', 'internal server error')
    }
  },

  update: async (req, res) => {
    const { title, ingredients, video, created_at } = req.body
    const id = req.params.id
    // const photo = req.file.filename
    const photo = await cloudinary.uploader.upload(req.file.path)
    console.log(photo)
    const data = {
      id,
      title,
      ingredients,
      photo,
      video,
      created_at,
      photo_url: photo.url,
      photo_public_id: photo.public_id,
      photo_secure_url: photo.secure_url
    }
    recipeModel.update(data).then((result) => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const { id } = req.params
    recipeModel
      .destroy(id)
      .then((result) => {
        res.json({
          message: 'success delete data',
          data: result
        })
      }).catch((err) => {
        res.json(err)
      })
  }
}

module.exports = recipeController
