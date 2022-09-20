import { hash } from 'bcrypt';
import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class TemplateService {
  //   public users = new PrismaClient().user;
  //   public async findAllUser(): Promise<User[]> {
  //     const allUser: User[] = await this.users.findMany();
  //     return allUser;
  //   }
}
export default TemplateService;
