import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./productModel";
import User from "./userModel";

@Table({
  tableName: 'Reviews',
  timestamps: false
})
class Review extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER
  }) product_id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  }) user_id!: number;

  @Column({
    type: DataType.INTEGER
  }) rating!: number;

  @Column({
    type: DataType.STRING
  }) comment!: string;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @BelongsTo(() => Product)
  product!: Product;

  @BelongsTo(() => User)
  user!: User;
}

export default Review;
