import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn } from 'typeorm';

import { User } from './User.entity';

@Entity('ocurrences')
export class Ocurrence {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    incidentDate: Date;

    @Column({ type: 'varchar' })
    message: string;

    @Column()
    meterValue: number;

    @OneToOne(() => User)
    userCreated: User;

    @CreateDateColumn()
    createdAt: Date;
}
