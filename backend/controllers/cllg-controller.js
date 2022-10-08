const cllglist = require('../models/cllgSchema.js')


exports.getOneCllg = async (req, res) => {

    try {
        const getCllg = await cllglist.findById(req.params.id);

        res.status(201).json(getCllg)

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllCllg = async (req, res) => {

    try {
        const getCllg = await cllglist.find();

        res.status(201).json(getCllg)

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

exports.createPost = async (request, response) => {

    try {
        const postCllg = await new cllglist(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
        
    } catch (error) {
        response.status(500).json(error);
    }
}