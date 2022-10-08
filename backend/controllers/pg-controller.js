const pglist = require('../models/pgSchema')

exports.getOnePg = async (req, res) => {

    try {        
        const getPG= await pglist.findById(req.params.id);
        
        res.status(201).json(getPG)

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllPg = async (req, res) => {

    try {        
        const getPGs= await pglist.find();
        
        res.status(201).json(getPGs)

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}
