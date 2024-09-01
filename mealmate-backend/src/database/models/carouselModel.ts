import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import carouselImage from "./carouselImage";

@Table
class carousel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })carouselId !: number
    
    @Column({
        type : DataType.STRING
    })carouselTitle !: string
    
    @Column({
        type : DataType.STRING
    })description !: string

    @HasMany(() => carouselImage)
    carouselImage !: carouselImage[]

}

export default carousel