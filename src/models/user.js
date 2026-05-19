import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{timestamps: true});

userSchema.pre('save', async function () {

    const salt = await bcrypt.genSalt(9);

    const encryptedPassword = await bcrypt.hash(
        this.password,
        salt
    );

    this.password = encryptedPassword;
});



const User = mongoose.model('User',userSchema);
export default User;