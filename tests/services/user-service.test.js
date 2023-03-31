import UserService from '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';

jest.mock('../../src/repository/user-repository.js');

describe('testing signup of a user', () => {
    test('for creating a user', async () => {
        const data = {
            email: 'a@b.com',
            password: '123456',
            name: 'test'
        }
        const userService = new UserService();
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt: '2023-3-24', updatedAt: '2023-3-24'});
        const user = await userService.signUp(data);
        expect(user.email).toBe(data.email);
    })
})