import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity('cells')
export class Cell {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true, length: 1000 })
    publicId: string;

    @OneToMany(() => User, (user) => user.cell)
    user: User;
}
