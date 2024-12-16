import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  animeList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnimeList'
  },
  gameList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GameList'
  },
  movieList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MovieList'
  }
});

const User = mongoose.model('User', userSchema);  
export default User;