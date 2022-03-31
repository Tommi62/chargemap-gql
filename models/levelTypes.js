'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const levelTypesSchema = new Schema({
    Title: String,
    Comments: String,
    IsFastChargeCapable: Boolean,
});


export default mongoose.model('LevelTypes', levelTypesSchema);