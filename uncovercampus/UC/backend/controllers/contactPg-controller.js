const contactPg = require('../models/contactPgSchema')

exports.contactPgList = async (req, res) => {
    try {
        const post = await new contactPg(req.body);
        post.save();

        res.status(201).json('Post saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}