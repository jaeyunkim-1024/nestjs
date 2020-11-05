import { isString } from "util";
import {IsString , IsNumber, IsOptional} from 'class-validator'


export class CreateMovieDto{
    @IsString()
    readonly title : string;

    @IsNumber()
    readonly year : number;
    
    @IsString({each : true})
    @IsOptional()
    readonly genres : string[];
}