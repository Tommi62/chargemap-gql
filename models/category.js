import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const category = new Schema({
  categoryName: String,
});

export default mongoose.model('Category', category);
