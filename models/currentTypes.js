'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const currentTypesSchema = new Schema({
    Description: String,
    Title: String,
});


export default mongoose.model('CurrentTypes', currentTypesSchema);