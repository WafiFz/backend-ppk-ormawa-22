import { Router } from 'express';
import TemplateController from '@controllers/template.controller';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware } from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
// import { CreateUserDto } from '@dtos/users.dto';

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
    // this.router.get(`${this.path}`, this.usersController.getUsers);
    // this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default TemplateRoute;
