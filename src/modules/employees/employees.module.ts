import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from '../../repositories/employee.repository';
import { EmployeesController } from '../../controllers/employees.controller';
import { EmployeesService } from '../../services/employees.service';
import { Employee, EmployeeSchema } from '../../schemas/Employee.schema';
import { VehicleController } from '../../controllers/Vehicle.controller';
import { VehicleService } from '../../services/Vehicle.service';
import { VehicleRepository } from '../../repositories/vehicle.repository';
import { Vehicle, VehicleSchema } from '../../schemas/Vehicle.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema },
    { name: Vehicle.name, schema: VehicleSchema }
  ])],
  controllers: [EmployeesController, VehicleController],
  providers: [EmployeesService, EmployeeRepository, VehicleService, VehicleRepository]
})
export class EmployeesModule { }
