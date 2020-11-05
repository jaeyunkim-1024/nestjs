import { PartialType } from "@nestjs/mapped-types";
import { CommonMovie } from "./movie.common.entity";

export class TxMovie extends PartialType(CommonMovie){}