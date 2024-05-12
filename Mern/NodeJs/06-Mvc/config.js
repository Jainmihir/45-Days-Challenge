const mongoose = require('mongoose');

//connection
// mongoose.connect('mongodb://127.0.0.1:27017/Mydb')
// .then(()=> console.log("Mongo DB connection"))
// .catch((err)=> console.log(`Error Mongo is not connected ${err}`));


async function connectMongoDb(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDb,
};