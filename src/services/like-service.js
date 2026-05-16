import { LikeRepository,TweetRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId , modelType , userId){ //  /api/v1/likes/toggle?id=modelid&type=Tweet
       
        if(modelType == 'Tweet'){
            
            var likeable = await this.tweetRepository.get(modelId);
            await likeable.populate('likes');
           
        }else if(modelType == 'Comment'){
            //Todo
        } else{
            throw new Error('Unknown model type');
        }
        
        const exist = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        
        if(exist){
            likeable.likes.pull(exist.id);
            await likeable.save();
            await exist.deleteOne();
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;