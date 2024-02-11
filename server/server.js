require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5050;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server and Database is running on port ${PORT}`);
          });
          
    })
    .catch((err) => {
        console.log(err);
    });

    


