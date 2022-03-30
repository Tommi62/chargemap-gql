import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const species = new Schema({
  speciesName: String,
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
});

export default mongoose.model('Species', species);
