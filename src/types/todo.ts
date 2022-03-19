import {Document}from 'mongoose';

export interface Todo extends Document {
    id: string,
    value: string,
    modified: Date,
    done: boolean,
    user: string
}