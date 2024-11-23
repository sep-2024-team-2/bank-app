import { BaseEntity } from "./abstractions/BaseEntity";
import { Table, Column, DataType, AllowNull } from "sequelize-typescript";

@Table
export class Address extends BaseEntity {
    @AllowNull(false)
    @Column(DataType.STRING)
    public readonly street!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public readonly streetNumber!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public readonly city!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public readonly country!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public readonly zipCode!: string;
}
