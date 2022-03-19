import { Body, Controller, Delete, Get, Param, Post,Query,UseGuards } from '@nestjs/common';
 import { AuthGuard } from '@nestjs/passport';
import { TodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(

        private todoService: TodoService
    ) { }

    @Post('create')
    @UseGuards(AuthGuard("jwt"))
    async createTodo(@Body() todoDTO: TodoDTO) {

        const todo = await this.todoService.create(todoDTO)
        return todo

    }

    @Post('update')
    @UseGuards(AuthGuard("jwt"))
    async update(@Body() todoDTO: TodoDTO) {

        const todo = await this.todoService.updateTodo(todoDTO);
        return todo

    }

    @Get('todos')
    @UseGuards(AuthGuard("jwt"))
    async getTodos(@Query() user: { user: String }) {
        
        const todos = this.todoService.getTodos(user.user);
        return todos

    }

    @Delete('todo')
    @UseGuards(AuthGuard("jwt"))
    async deleteTodo(@Body() todo: { user: String, id: String }) {
       return await this.todoService.deleteTodo(todo);
    }
}
