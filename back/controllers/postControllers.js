const Post = require('../models/postModel')

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.createPost = async (req, res) => {
    try {
        const { content, color } = req.body

        const newPost = new Post({ content, color })
        await newPost.save()

        res.status(201).json({ newPost })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { content, color } = req.body
        const post = await Post.findById(id)
        if(!post) return res.status(404).json({ message: "Note introuvable" })

        if(content) post.content = content
        if(color) post.color = color
        await post.save()
        
        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post) return res.status(404).json({ message: "Note introuvable"})
        await post.deleteOne()
        res.status(200).json({ message: "Note supprimée avec succès"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}