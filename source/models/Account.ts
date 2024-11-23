import { AccountType } from "./enums/AccountType";
import { Model, Table, Column, DataType, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";

@Table
export class Account extends Model {

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false
    })
    public bankUid!: string;

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false
    })
    public number!: string;

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false
    })
    public controlNumber!: string;

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false
    })
    public identifier!: string;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    public balance!: number;

    @AllowNull(false)
    @Column(DataType.ENUM({ values: Object.values(AccountType) }))
    public type!: AccountType;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.STRING)
    public userId!: string;

    @BelongsTo(() => User)
    public user!: User;
}
