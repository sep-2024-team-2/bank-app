import dotenv from 'dotenv';

dotenv.config();

export class Bank {
    private static instance: Bank | null = null;

    public readonly uid!: string;
    public readonly name!: string;
    public readonly email!: string;
    public readonly phoneNumber!: string;
    public readonly swift!: string;
    public readonly iin!: string;

    private constructor() {
        this.uid = process.env.UID || '';
        this.name = process.env.BANK_NAME || '';
        this.email = process.env.BANK_EMAIL || '';
        this.phoneNumber = process.env.BANK_PHONE || '';
        this.swift = process.env.BANK_SWIFT || '';
    }

    public static getInstance(): Bank {
        if (!Bank.instance) {
            Bank.instance = new Bank();
        }
        return Bank.instance;
    }
}
