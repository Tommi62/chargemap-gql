'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const connectionTypesSchema = new Schema({
    Title: String,
    FormalName: String,
});


export default mongoose.model('ConnectionTypes', connectionTypesSchema);
