import { IsEmpty, IsIn, IsNotEmpty, NotEquals, ValidateIf } from "class-validator";
import { EmployeeStatus, EmployeeTier } from "../enums/Employee.enum";

export class EmployeeCreateDto {
    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @NotEquals('CEO')
    designation: string
    nearestCity: string
    tier: EmployeeTier
    @ValidateIf(s => typeof s.status !== 'undefined') 
    @IsIn(Object.values(EmployeeStatus))
    status: EmployeeStatus
}