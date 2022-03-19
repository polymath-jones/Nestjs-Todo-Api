import * as mongoose from 'mongoose';
import * as bycrypt from 'bcrypt';

export const TodoSchema = new mongoose.Schema({
    id: {type: String,unique: true,required: true},
    value: {type: String, required: true},
    modified: {type:Date, required: true},
    done: {type: Boolean, required: true},
    user: {type: String, required: true},
})