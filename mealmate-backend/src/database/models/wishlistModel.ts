import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import carousel from "./carouselModel";
import product from "./productModel";
import user from "./userModel";

@Table
class wishlist extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })wishlistID !: number

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

    @ForeignKey(() => user)
    @Column({
        type : DataType.INTEGER
    })userId !: number
    
}

export default wishlist