import { NextFunction, Request, Response } from 'express';
import { Admin } from '@prisma/client';
import { CreateAdminDto, LoginAdminDto } from '@dtos/admin.dto';
import { RequestWithAdmin, RequestWithUser } from '@interfaces/auth.interface';
import AuthAdminService from '@services/authAdmin.service';

class AuthAdminController {
  public authAdminService = new AuthAdminService();

  public register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const adminData: CreateAdminDto = req.body;
      const signUpAdminData: Admin = await this.authAdminService.signup(adminData);

      res.status(201).json({ data: signUpAdminData, message: 'admin signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const adminData: LoginAdminDto = req.body;
      const { cookie, findAdmin, tokenData } = await this.authAdminService.login(adminData);

      const result = { findAdmin, tokenData };

      // res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: result, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithAdmin, res: Response, next: NextFunction): Promise<void> => {
    try {
      const adminData: Admin = req.admin;
      const logOutAdminData: Admin = await this.authAdminService.logout(adminData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutAdminData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthAdminController;
