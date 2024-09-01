import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Users from "./userModel";

@Table
class UserDetails extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) userID!: number;

  @Column({
    type: DataType.STRING
  }) first_name!: string;

  @Column({
    type: DataType.STRING
  }) last_name!: string;

  @Column({
    type: DataType.INTEGER
  }) building!: string;

  @Column({
    type: DataType.STRING
  }) street!: string;

  @Column({
    type: DataType.STRING
  }) city!: string;

  @Column({
    type: DataType.INTEGER
  }) ZipCode!: number;

  @Column({
    type: DataType.STRING
  }) state!: string;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER
  }) Details_ID!: number;

  @BelongsTo(() => Users)
  user!: Users;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;
}

export default UserDetails;
