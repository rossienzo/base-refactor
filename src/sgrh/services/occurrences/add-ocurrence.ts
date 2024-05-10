/*
import { UserRepository } from '../repositories/user-repository';
import { OcurrenceRepository } from '../repositories/ocurrence-repository';
import { Ocurrence } from '../../entities/Ocurrence.entity';

export class AddOcurrence {
    private userRepository: UserRepository;
    private ocurrenceRepository: OcurrenceRepository;

    constructor(userRepository: UserRepository, ocurrenceRepository: OcurrenceRepository) {
        this.userRepository = userRepository;
        this.ocurrenceRepository = ocurrenceRepository;
    }

    async createOcurrence(user: User, data: Ocurrence): Promise<void> {
        const existingUser = this.userRepository.findUser(user);

        if (!existingUser) {
          throw new Error('User not found');
        }

        const ocurrence = new Ocurrence(user, Ocurrence);
        await this.ocurrenceRepository.saveOcurrence(ocurrence);
    }
}
*/
