import { User } from '../../domain/entities/User.entity';
import Service from '../../presentation/helpers/service';
import { UserRepository } from '../../repositories/user/user-repository';

export class GetUsersService implements Service {
    constructor(private repository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.repository.getAllUsers();
    }
}
