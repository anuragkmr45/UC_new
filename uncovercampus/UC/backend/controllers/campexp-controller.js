const capmusexp = require('../models/campexpSchema.js')


// give all data group by id
exports.getAllExp = async (req, res) => {
    
    try {       
        const getCampexp = await capmusexp.findById(req.params.id);
        
        res.status(201).json(getCampexp)
        
    } catch (error) {
        
        res.status(404).json({
            success: false,
            message: error.message
        })

    }
}

// give all uniqule data group by college name
exports.getAllExpByCllgName = async (req, res) => {
    
    try {       
        const getCampexp = await capmusexp.find().distinct('collegeName');
        
        res.status(201).json(getCampexp)
        
    } catch (error) {
        
        res.status(404).json({
            success: false,
            message: error.message
        })

    }
}


exports.getExpByCllgName = async (req, res) => {
    
    try {       
        const getCampexp = await capmusexp.find(
            {
                "$or": [
                    { "collegeName" : { $regex: req.params.collegeName } }
                ]
            }
        );
        
        res.status(201).json(getCampexp)
        
    } catch (error) {
        
        res.status(404).json({
            success: false,
            message: error.message
        })

    }
}