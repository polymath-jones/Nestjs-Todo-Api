import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from 'src/types/todo';
import { Model } from 'mongoose';
import { TodoDTO } from './todo.dto';
import { verify } from 'jsonwebtoken';

@Injectable()
export class TodoService {

  constructor(
    @InjectModel('Todo') private todoModel: Model<Todo>
  ) { }

  async create(TodoDTO: TodoDTO) {
    const todo = new this.todoModel(TodoDTO);
    let data;
    await todo.save().then((todo) => {
      data = todo;
    }).catch(() => {
      throw new HttpException('invalid Data', HttpStatus.BAD_REQUEST);
    });
    return data;
  }

  async getTodos(user: String) {
    const todos = await this.todoModel.find({ user: user });
    return todos
  }

  async deleteTodo(todo: { user: String, id: String }) {
    const response = await this.todoModel.deleteOne(todo);
    return `Deleted ${response.deletedCount} entries`
  }

  async updateTodo(todoDTO: TodoDTO) {
    const response = await this.todoModel.findOneAndUpdate({ id: todoDTO.id }, { value: todoDTO.value, done: todoDTO.done, modified: todoDTO.modified })
    return response;
  }

}
