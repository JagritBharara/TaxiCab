const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');
const jwt = require('jsonwebtoken')


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3,"It should contain atleast 3 letter"]
        },
        lastname:{
            type:String,
            minlength: [3,"It should contain atleast 3 letter"]
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase : true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum : ['active','inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required: true,
            minlength : [3,"It should contain atleast 3 letter"]
        },
        plate:{
            type: String,
            required: true,
            minlength: [3,'Plate must be at least 3 character long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1,'Capacity must be ateast 1']
        },
        vehicleType:{
            type : String,
            required: true,
            enum : ['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type: Number
        },
        lng: {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
};

captainSchema.methods.comparePassword = async function (password){
    return await bcyrpt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcyrpt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;


