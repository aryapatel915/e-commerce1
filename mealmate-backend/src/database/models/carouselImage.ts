import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import carousel from "./carouselModel";

@Table
class carouselImage extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })carouselImageID !: number

    @Column({
        type : DataType.STRING
    })carouselImage !: string

    @ForeignKey(() => carousel)
    @Column({
        type : DataType.INTEGER
    })carouselId !: number

    @BelongsTo(() => carousel)
    carousel !: carousel
}

export default carouselImage