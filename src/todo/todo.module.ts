import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from 'src/models/todo.schema';
import { UserModule } from 'src/user/user.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
  ],
  providers: [TodoService],
  controllers: [TodoController],
  exports: [TodoService]
})
export class TodoModule { }
