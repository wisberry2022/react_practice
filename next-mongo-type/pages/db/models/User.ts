import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
})

export default mongoose.models.User || mongoose.model('User', TestSchema, 'User');

// const User = mongoose.model('User', TestSchema, 'User');

// export default User || mongoose.models.User;