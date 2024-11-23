import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import path from 'path';
import {Account} from "../models/Account";
import {User} from "../models/User";
import {Card} from "../models/Card";
import {Address} from "../models/Address";
import {Person} from "../models/Person";
import {Company} from "../models/Company";

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    ssl: false,
    models: [Account, User, Card, Address, Person, Company],
    define: {
        timestamps: false,
    },
});

export default sequelize;