import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum BillingType {
    Hourly = 0,
    Daily = 1,
    Monthly = 2
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Email: string;

    @Column({
        type: "enum",
        enum: BillingType,
        default: BillingType.Hourly
    })
    BillingType: BillingType;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}
