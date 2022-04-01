'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const stationSchema = new Schema({
  Title: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: 'Point', // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  Connections: [{ type: mongoose.Types.ObjectId, ref: 'Connections' }]
});


export default mongoose.model('Station', stationSchema);
