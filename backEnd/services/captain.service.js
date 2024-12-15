const captainModel = require('../models/captain.model');


module.exports.createCaptain = async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const existingUser = await captainModel.findOne({ email });
    if (existingUser) {
        console.log("Exist")
        // throw new Error('Email is already registered');
        
        return null;
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}