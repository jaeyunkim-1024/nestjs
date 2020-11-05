import { IsNumber, IsString } from "class-validator";

export class Coffe{
    @IsNumber()
    caffeine : number;

    @IsString()
    name : string;    
}