import { UserRepository } from '../../repositories/user/user-repository';
import { User } from '../../domain/entities/User.entity';
import Service from '../../presentation/helpers/service';

export class CreateUserService implements Service {
    constructor(private userRepository: UserRepository) {}

    async execute(userData: any): Promise<User> {
        // Validate the user data

        // Create a new user entity

        // Save the user to the database using the user repository
        const createdUser = await this.userRepository.createUser(userData);
        return createdUser;
    }
}
