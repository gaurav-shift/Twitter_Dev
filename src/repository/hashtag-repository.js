//const Hashtags = require('../models/hashtags');
import Hashtags from '../models/hashtags.js';
class HashtagRepository {
    async create(data){
        try {
            const tags = await Hashtags.create(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data){   
        try {
            const tags = await Hashtags.insertMany(data); // array of obj (data)
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tags = await Hashtags.findById(id);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = await Hashtags.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }       
    }

    async findByName(titleList){
        try {
            const tags = await Hashtags.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

// module.exports = HashtagRepository;
export default HashtagRepository;
