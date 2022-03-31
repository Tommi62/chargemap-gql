'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const connectionsSchema = new Schema({
    Quantity: Number,
    ConnectionTypeID: { type: mongoose.Types.ObjectId, ref: 'ConnectionTypes' },
    CurrentTypeID: { type: mongoose.Types.ObjectId, ref: 'CurrentTypes' },
    LevelID: { type: mongoose.Types.ObjectId, ref: 'LevelTypes' },
});


export default mongoose.model('Connections', connectionsSchema);
