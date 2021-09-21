import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './config/database.propeties';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule { }
