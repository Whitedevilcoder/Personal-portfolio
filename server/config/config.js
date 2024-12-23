// const { name } = require('ejs')
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/Portfolio')

// checking DB is connected
db.then(() => {
    console.log("Database is connected");

})
    .catch(() => {
        console.log('Database is not connected');

    })


//schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    enquiries: {
        type: String,
        required: true
    }
});

// const Info = mongoose.model('User_Info', infoSchema);




const collection = new mongoose.model("client-details", contactSchema);
module.exports = collection;

