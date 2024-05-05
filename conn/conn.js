const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://ermohitkumar2003:mongodb%40mohit@cluster0.jmqnito.mongodb.net/").then(() => { console.log("Database Connection is Successfull") })
            .catch((error) => {
                console.log("Error occured while connection to Database");
                console.error(error.message);
                process.exit(1);

            })
    } catch (error) {
        res.status(400).json({
            message: "Not Connected"
        })
    }
}

module.exports = dbConnect;

