// Init Mongoose
const mongoose = require('mongoose');


// Data push to mongo
const mongoConnection = async() => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully`.black);
    } catch (error) {
        console.log(error.message);
    }

}



module.exports = mongoConnection;