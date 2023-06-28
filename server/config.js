const mongoose = require('mongoose');

const uri = `mongodb+srv://aashishthakur3069:aldebaran@cluster0.uqkb81a.mongodb.net/react-crud?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    };

    mongoose.connect(uri, options).then(() => {
        console.log("Database connection established!");
        },err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });