const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://laeeqahmed656:laeeqahmed656@cluster0.cwsy6.mongodb.net/")
        console.log("mongodb connection successfull");
    } catch (error) {
        console.error("Something went wrong with db connection", error) ;
        process.exit(1)
    }
}

module.exports= connectDB