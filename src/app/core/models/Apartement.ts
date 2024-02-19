import { Residence } from "./Residence";

export class Apartement{
    id!: number;
    appartNum!: number;
    floorNum!: number;
    surface!: number;
    terrace!: string;
    surfaceTerrace!: number;
    category!: string;
    description!: string;
    residence!:Residence;

}
//the "!" after the naming of the variable in the code above means that its value will be set later