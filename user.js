import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, minlength: 6 },
  role: {
    type: String,
    enum: ['user', 'admin', 'editor'],  // define roles here
    default: 'admin',
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const users = [
  { id: 1, username: 'adminuser', password: 'hashedpassword1', role: 'admin' },
  { id: 2, username: 'editoruser', password: 'hashedpassword2', role: 'editor' },
  { id: 3, username: 'regularuser', password: 'hashedpassword3', role: 'user' },
];
export default User;
