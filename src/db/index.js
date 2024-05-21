// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
// import connectToDatabase from "./db/index.js";



import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB






























// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

// export default connectDB

// const DB_NAME = process.env.DB_NAME;
// const MONGODB_URI = process.env.MONGODB_URI;

// async function connectToDatabase() {
//   if (!MONGODB_URI || !DB_NAME) {
//     console.error('Missing MONGODB_URI or DB_NAME environment variables');
//     process.exit(1);
//   }

//   try {
//     const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Successfully connected to the database');
//     return connectionInstance;
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// }

// // Example usage:
// export default connectToDatabase();



// async function connectToDatabase() {
//     if (!MONGODB_URI || !DB_NAME) {
//       console.error('Missing MONGODB_URI or DB_NAME environment variables');
//       process.exit(1);
//     }
  
//     try {
//       const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
  
//       console.log('Successfully connected to the database');
//       return connectionInstance;
//     } catch (error) {
//       console.error('Error connecting to the database:', error.message);
//       process.exit(1); // Exit process with failure
//     }
//   }
  
//   // Export the function for use in other modules
//   module.exports = connectToDatabase;


