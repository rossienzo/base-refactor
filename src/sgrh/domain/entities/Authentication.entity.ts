import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { RolesEnum } from '../enum/roles.enum';
import { User } from './User.entity';

@Entity('authentications')
export class Authentication {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true, length: 300 })
    email: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.USER })
    role: RolesEnum;

    @OneToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'varchar', nullable: true, length: 255 })
    salt: string | null;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;
}
