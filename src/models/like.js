import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet','Comment']
    },
    Likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;

// very graceful very extendable like model created