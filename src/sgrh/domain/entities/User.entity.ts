import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';
import { Authentication } from './Authentication.entity';
import { ResidenceDistancesEnum } from '../enum/residenceDistances.enum';
import { Cell } from './Cell.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ name: 'personal_email', unique: true })
    personalEmail: string;

    @Column({ type: 'varchar', unique: true, length: 14 })
    cpf: string;

    @Column({ type: 'varchar', length: 15 })
    phone: string;

    @Column({ type: 'varchar', unique: true, nullable: false, length: 15 })
    registration: string;

    @ManyToOne(() => Cell, { eager: true, nullable: false })
    @JoinColumn({ name: 'cell_id' })
    cell: Cell;

    @Column({ type: 'enum', enum: ResidenceDistancesEnum, default: ResidenceDistancesEnum.NEAR })
    residenceDistance: ResidenceDistancesEnum;

    @Column({ name: 'num_projects', default: 0 })
    numProjects: number;

    @Column({ type: 'smallint', default: 24 })
    meters: number;

    @Column({ name: 'active_member', default: true })
    activeMember: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: 'timestamp',
        name: 'deleted_at',
        default: () => 'CURRENT_TIMESTAMP'
    })
    deletedAt: Date;

    // TypeORM relation
    @OneToOne(() => Authentication, (auth) => auth.user)
    authentication: Authentication;
}
