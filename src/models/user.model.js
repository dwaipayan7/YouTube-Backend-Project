import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    
    },
    avatar:{
        type: String,//cloudiary url
        required: true,

    },
    coverImage: {
        type: String,//cloudiary url

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    password:{
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }



},{
    timestamps: true
}
)

userSchema.pre("save", async function(next){
    this.password = bcrypt.hash(this.password, 10)
    next()
})




export const Uesr = mongoose.model("User", userSchema)
