import { AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./productModel";

@Table({
  tableName: 'Categories',
  timestamps: false
})
class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) id!: number;

  @Column({
    type: DataType.STRING
  }) name!: string;

  @Column({
    type: DataType.STRING
  }) description!: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  }) parent_category_id?: number;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @HasMany(() => Category, 'parent_category_id')
  subCategories!: Category[];

  @HasMany(() => Product, 'category_id')
  products!: Product[];
}

export default Category;
