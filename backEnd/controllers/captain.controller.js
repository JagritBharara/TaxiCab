const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult, cookie} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerCaptain = async (req,res,next)=>{
    const errors = validationResult(req);
    console.log(errors);
    if(!errors){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname,email,password,vehicle} = req.body;
    // console.log(fullname);
    // console.log(email);
    // console.log(password);
    // console.log(vehicle);
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email:email,
        password: hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    if(!captain){
        res.status(401).json({msg:"Error While Entering Or Captain Already Exist"});
        return;

    }
    else{
        const token = captain.generateAuthToken();

        res.status(201).json({token,captain});
    }
}

module.exports.loginCaptain = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors){
        res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    
    if(!captain){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200).json({captain : req.captain});
}

module.exports.logoutCaptain = async (req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    await blacklistTokenModel.create({token});

    res.status(200).json({message: 'Logged Out'});
}

