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

    async getUserByEmail(email){
        try {
            const user = await this.UserRepository.findBy({ email });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async signIn(data){
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user){
                throw new Error('User not found');
            }
            const isMatch = await user.comparePassword(data.password);

            if(!isMatch){
                throw new Error('Invalid password');
        }
            const token =  user.genJWT();
            return token;
        }catch (error) {
            throw error;
        }
};
   

}

export default UserService;