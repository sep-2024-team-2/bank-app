import {Table, Column, DataType, AllowNull, Unique, ForeignKey, BelongsTo} from "sequelize-typescript";
import { User } from "./User";
import { BaseEntity } from "./abstractions/BaseEntity";

@Table
export class Company extends BaseEntity {
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId!: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    public registrationNumber!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    public name!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    public website?: string;

    @BelongsTo(() => User)
    user!: User;
}
