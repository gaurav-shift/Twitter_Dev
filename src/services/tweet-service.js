//const {TweetRepository , HashtagRepository} = require('../repository/index')

import { TweetRepository , HashtagRepository } from '../repository/index.js'
class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex exrtracts hashtags
       // tags = tags.map((tag) => tag.substring(1));
        
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag)); // added newtags
        newTags = newTags.map(tag =>
            {  return {title: tag, tweets: [tweet.id]}
        });

        await this.hashtagRepository.bulkCreate(newTags); // stored those in response
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });

        return tweet;
    }
}

//module.exports = TweetService;

export default TweetService; 