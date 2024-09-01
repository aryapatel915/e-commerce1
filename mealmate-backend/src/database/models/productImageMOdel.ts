import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./productModel";

@Table({ tableName: "ProductImages" })
class ProductImage extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId!: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  imageUrl!: string;

  @Column({ type: DataType.DATE })
  createdAt!: Date;

  @BelongsTo(() => Product)
  product!: Product;
}

export default ProductImage;
