import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Order from "./orderModel";
import Product from "./productModel";

@Table({
  tableName: 'OrdersItems',
  timestamps: false
})
class OrderItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) id!: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER
  }) order_id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER
  }) product_id!: number;

  @Column({
    type: DataType.INTEGER
  }) quantity!: number;

  @Column({
    type: DataType.INTEGER
  }) price!: number;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @BelongsTo(() => Order)
  order!: Order;

  @BelongsTo(() => Product)
  product!: Product;
}

export default OrderItem;
