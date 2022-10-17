const EventStuReg = require('../models/eventStuSchema')

exports.eventStuReg =  async (req, res) => {

    try {
        const addEventStuReg = {

            stuName: req.body.stuName,
            cllgName: req.body.cllgName,
            phone: req.body.phone,
            email: req.body.email,
        }

        const stuData = await EventStuReg.create(addEventStuReg);

        res.status(201).json({
            success: true,
            stuData,
        })
        
        

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}
