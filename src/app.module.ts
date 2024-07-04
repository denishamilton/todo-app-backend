// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task.module';
import { Task } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sS111222333s',
      database: 'todo-app',
      entities: [Task],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
