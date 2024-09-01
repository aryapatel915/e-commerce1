import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
class offerItem extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })offerItemImageID !: number

    @Column({
        type : DataType.STRING
    })offerItemImage !: string

    @Column({
        type: DataType.DATE
      }) start_date!: Date;

      @Column({
        type: DataType.DATE
      }) end_date!: Date;
      
    @Column({
        type: DataType.DATE
      }) created_at!: Date;

}

export default offerItem