import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import  Category  from "./categoriesModel";
import ProductImage from './productImageMOdel';
import OrderItem from "./orderItemModel";
import Order from "./orderModel";

@Table({ tableName: "Products" })
class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  productId!: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name!: string;

  @Column({ type: DataType.STRING })
  description?: string;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  price!: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  stockQuantity!: number;

  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId!: number;

  @Column({ type: DataType.DATE })
  createdAt!: Date;

  @BelongsTo(() => Category)
  category!: Category;

  @HasMany(() => ProductImage)
  ProductImage !: ProductImage[]


  @HasMany(() => OrderItem)
  orderItem!: OrderItem[];
}

export default Product;
