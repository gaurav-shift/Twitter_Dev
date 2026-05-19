import { UserRepository } from '../repository/index.js';

class UserService{
    constructor() {
        this.UserRepository = new UserRepository();
    }

    async signUp(data){
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default UserService;