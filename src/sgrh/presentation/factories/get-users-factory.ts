import { UserRepository } from '../../repositories/user/user-repository';
import { GetUsersService } from '../../services/users/get-users';
import GetUsersController from '../controllers/get-users-controller';
import { Controller } from '../helpers/controller';

export function createGetUsers(): Controller {
    const userRepo = new UserRepository();
    const getUsersService = new GetUsersService(userRepo);
    return new GetUsersController(getUsersService);
}
