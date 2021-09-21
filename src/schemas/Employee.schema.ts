import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { EmployeeTier, EmployeeStatus } from '../enums/Employee.enum';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
    @Prop()
    id: string
    @Prop({required:true})
    firstName: string
    @Prop({ required: true })
    lastName: string
    @Prop()
    city: string
    @Prop()
    tier: EmployeeTier
    @Prop()
    status:EmployeeStatus
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);