import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import carousel from "./carouselModel";
import product from "./productModel";
import user from "./userModel";

@Table
class cart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })cartID !: number

    @Column({
        type : DataType.STRING
    })ProductName !: string

    @Column({
        type : DataType.STRING
    })ProductDescription !: string

    @Column({
        type : DataType.STRING
    })ProductImage !: string

    @AllowNull(false)
    @Column({
        type : DataType.INTEGER
    })ProductId !: number

    @AllowNull(false)
    @Column({
        type : DataType.INTEGER
    })CartPrice !: number

    @ForeignKey(() => user)
    @Column({
        type : DataType.INTEGER
    })userId !: number

    @BelongsTo(() => user)
    carousel !: user

    

    
}

export default cart