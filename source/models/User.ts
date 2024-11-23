import {AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique} from "sequelize-typescript";
import { Role } from "./enums/Role";
import { Address } from "./Address";

@Table
export class User extends Model {
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.STRING,
        primaryKey: true,
        allowNull: false
    })
    public readonly id!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    email!: string;

    @AllowNull(false)
    @Column(DataType.ENUM({ values: Object.values(Role) }))
    role!: Role;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    public phoneNumber?: string;

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.UUID)
    public addressId!: string;

    @BelongsTo(() => Address)
    public address!: Address;
}
