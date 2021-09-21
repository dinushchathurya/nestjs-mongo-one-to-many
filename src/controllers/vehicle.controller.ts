import { Body, Controller, Get, Post } from "@nestjs/common";
import { Vehicle } from "../schemas/Vehicle.schema";
import { VehicleService } from "../services/Vehicle.service";
import { VehicleCreateDTO } from "../dto/VehicleCreate.dto";

@Controller('vehicles')
export class VehicleController {

    constructor(private vehicleService: VehicleService) { }

    @Post()
    async create(@Body() vehicleCreateDto: VehicleCreateDTO): Promise<Vehicle> {
        let ret = await this.vehicleService.create(vehicleCreateDto);
        console.log(ret)
        return ret
    }
    @Get()
    async getAll() {
        return this.vehicleService.getAll();
    }

}