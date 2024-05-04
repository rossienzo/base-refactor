import { User } from "./User.entity"

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('ocurrences')

export class Ocurrence {
    id: string
    incidentDate: Date
    message: string
    meterValue: number
    userCreated: User
    createdAt: Date
}