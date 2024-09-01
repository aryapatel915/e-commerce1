import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";
import OrderItem from "./orderItemModel";
import Product from "./productModel";

@Table({
  tableName: 'Orders',
  timestamps: false
})
class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  }) user_id!: number;

  @Column({
    type: DataType.STRING
  }) status!: string;

  @Column({
    type: DataType.INTEGER
  }) total_amount!: number;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => OrderItem)
  orderItems!: OrderItem[];


}

export default Order;
