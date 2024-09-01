import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserDetails from "./usrDetailsModel";

@Table
class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  }) userid!: number;

  @Column({
    type: DataType.STRING
  }) username!: string;

  @Column({
    type: DataType.STRING
  }) email!: string;

  @Column({
    type: DataType.STRING
  }) password_hash!: string;

  @Column({
    type: DataType.DATE
  }) created_at!: Date;

  @HasMany(() => UserDetails)
  userDetails!: UserDetails[];
}

export default Users;
