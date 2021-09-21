import { Module } from '@nestjs/common';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
