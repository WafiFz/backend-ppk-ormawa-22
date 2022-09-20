import { Router } from 'express';
import TemplateController from '@controllers/template.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class TemplateRoute implements Routes {
  public path = '/template';
  public router = Router();
  public templateController = new TemplateController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.post(`${this.path}register`, validationMiddleware(CreateUserDto, 'body'), this.templateController.register);
    // this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.templateController.logIn);
    // this.router.post(`${this.path}logout`, authMiddleware, this.templateController.logOut);
  }
}

export default TemplateRoute;
