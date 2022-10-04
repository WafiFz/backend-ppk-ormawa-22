import { SECRET_KEY } from '@config';
import { CreateAdminDto, LoginAdminDto } from '@dtos/admin.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { softMiddleware } from '@middlewares/prisma.middleware';
import { PrismaClient, Admin } from '@prisma/client';
import { isEmpty } from '@utils/util';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

class AuthAdminService {
  public admin = new PrismaClient().admin;
  public prismaSoft = new PrismaClient();

  public async signup(adminData: CreateAdminDto): Promise<Admin> {
    softMiddleware(this.prismaSoft);

    if (isEmpty(adminData)) throw new HttpException(400, 'adminData is empty');

    const findAdmin: Admin = await this.prismaSoft.admin.findFirst({ where: { username: adminData.username } });
    if (findAdmin) throw new HttpException(409, `This username ${adminData.username} already exists`);

    const hashedPassword = await hash(adminData.password, 10);
    const createAdminData: Promise<Admin> = this.admin.create({ data: { ...adminData, password: hashedPassword } });

    return createAdminData;
  }

  public async login(adminData: LoginAdminDto): Promise<{ cookie: string; findAdmin: Admin; tokenData: TokenData }> {
    if (isEmpty(adminData)) throw new HttpException(400, 'adminData is empty');

    const findAdmin: Admin = await this.prismaSoft.admin.findFirst({ where: { username: adminData.username } });
    if (!findAdmin) throw new HttpException(409, `This username ${adminData.username} was not found`);

    const isPasswordMatching: boolean = await compare(adminData.password, findAdmin.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const tokenData = this.createToken(findAdmin);
    const cookie = this.createCookie(tokenData);

    return { cookie, findAdmin, tokenData };
  }

  public async logout(adminData: Admin): Promise<Admin> {
    if (isEmpty(adminData)) throw new HttpException(400, 'adminData is empty');

    const findAdmin: Admin = await this.prismaSoft.admin.findFirst({ where: { username: adminData.username, password: adminData.password } });
    if (!findAdmin) throw new HttpException(409, "Admin doesn't exist");

    return findAdmin;
  }

  public createToken(admin: Admin): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: admin.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 24 * 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthAdminService;
