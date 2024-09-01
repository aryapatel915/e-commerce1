import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./productModel";

@Table({
  tableName: 'Inventory',
  timestamps: false
})
class Inventory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER
  }) product_id!: number;

  @Column({
    type: DataType.INTEGER
  }) quantity!: number;

  @Column({
    type: DataType.STRING
  }) warehouse_location!: string;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @BelongsTo(() => Product)
  product!: Product;
}

export default Inventory;
