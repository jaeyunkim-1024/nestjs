import {IsString , IsNumber, IsOptional} from 'class-validator'

export class CommonMovie{
    @IsNumber()
    id : number;

    @IsString()
    readonly title : string;

    @IsNumber()
    readonly year : number;
    
    @IsString({each : true})    
    readonly genres : string[];
}