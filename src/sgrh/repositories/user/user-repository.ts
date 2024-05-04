import { Repository } from 'typeorm';
import { User } from '../../domain/entities/User.entity';
import { ResidenceDistancesEnum } from '../../domain/enum/residenceDistances.enum'; // Importar o enum necessário

type CreateUserDto = {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    registration: string;
    residenceDistance: ResidenceDistancesEnum; // Adicionar residenceDistance ao tipo CreateUserDto
};

export class UserRepository extends Repository<User> {
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, email, cpf, residenceDistance, phone, registration } = createUserDto; // Adicionar residenceDistance ao destructuring

        const user = new User();
        user.name = name;
        user.activeMember = true;
        user.personalEmail = email;
        user.cpf = cpf;
        user.phone = phone;
        user.registration = registration;

        // Verificar se residenceDistance é um valor válido do enum
        if (Object.values(ResidenceDistancesEnum).includes(residenceDistance)) {
            user.residenceDistance = residenceDistance;
        } else {
            throw new Error('Invalid residence distance value');
        }

        await this.save(user);

        return user;
    }
}
