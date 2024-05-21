// // require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// // import connectDB from "./db/index.js";
// // import {app} from './app.js'

// import connectToDatabase from "./db/index.js";
// dotenv.config({
//     path: './env'
// })

// // connectToDatabase()


// ;(async () => {
//     try {
//       await connectToDatabase();
//       // Other initialization code here
//     } catch (error) {
//       console.error('Failed to initialize application:', error.message);
//       process.exit(1);
//     }
//   })();



















// // .then(() => {
// //     app.listen(process.env.PORT || 8000, () => {
// //         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
// //     })
// // })
// // .catch((err) => {
// //     console.log("MONGO db connection failed !!! ", err);
// // })










// /*
// import express from "express"
// const app = express()
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()

// */










// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/