import { Table, Column, DataType, AllowNull, Unique, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";
import { BaseEntity } from "./abstractions/BaseEntity";

@Table
export class Person extends BaseEntity {
    @ForeignKey(() => User)
    @Column(DataType.STRING)
    userId!: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    public pin!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public firstName!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public lastName!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    public dateOfBirth!: Date;

    @BelongsTo(() => User)
    user!: User;
}
