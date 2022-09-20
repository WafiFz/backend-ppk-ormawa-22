import { Router } from 'express';
import PupukController from '@controllers/pupuk.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class TemplateRoute implements Routes {
  public path = '/pupuk';
  public router = Router();
  public pupukController = new PupukController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.post(`${this.path}register`, validationMiddleware(CreateUserDto, 'body'), this.templateController.register);
    // this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.templateController.logIn);
    // this.router.post(`${this.path}logout`, authMiddleware, this.templateController.logOut);
    this.router.get(`${this.path}`, authMiddleware, this.pupukController.getAllPupuk);
  }
}

export default TemplateRoute;
