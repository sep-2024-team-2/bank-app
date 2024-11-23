import { Model, Table, Column, DataType, AllowNull, ForeignKey, BelongsTo, Index } from "sequelize-typescript";
import { CardNetwork } from "./enums/CardNetwork";
import { Account } from "./Account";

@Table
export class Card extends Model {

    @AllowNull(false)
    @Index
    @Column(DataType.INTEGER)
    public iin!: number;

    @AllowNull(false)
    @ForeignKey(() => Account)
    @Column(DataType.STRING)
    public accountId!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public checkSum!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    public expirationDate!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public cvv!: string;

    @AllowNull(false)
    @Column(DataType.ENUM({ values: Object.values(CardNetwork) }))
    public network!: CardNetwork;

    @BelongsTo(() => Account)
    public account!: Account;
}
