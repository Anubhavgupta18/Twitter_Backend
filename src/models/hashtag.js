import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
},{ timestamps: true });

const Hashtag = mongoose.model('Hashtag', tagSchema);

export default Hashtag;