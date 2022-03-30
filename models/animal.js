import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const animal = new Schema({
  animalName: String,
  species: { type: mongoose.Types.ObjectId, ref: 'Species' },
});

export default mongoose.model('Animal', animal);
