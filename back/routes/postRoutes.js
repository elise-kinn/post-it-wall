const express = require('express')
const router = express.Router()

const postControllers = require('../controllers/postControllers')

router.get('/', postControllers.getAllPosts)
router.post('/', postControllers.createPost)
router.patch('/:id', postControllers.updatePost)
router.delete('/:id', postControllers.deletePost)

module.exports = router