import AuthAdminController from '@controllers/authAdmin.controller';
import { CreateAdminDto, LoginAdminDto } from '@dtos/admin.dto';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware, authAdminMiddleware } from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { Router } from 'express';

class AuthRoute implements Routes {
  public path = '/admin/';
  public router = Router();
  public authAdminController = new AuthAdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}register`, validationMiddleware(CreateAdminDto, 'body'), this.authAdminController.register);
    this.router.post(`${this.path}login`, validationMiddleware(LoginAdminDto, 'body'), this.authAdminController.logIn);
    this.router.post(`${this.path}logout`, authAdminMiddleware, this.authAdminController.logOut);
  }
}

export default AuthRoute;
