import { NextFunction, Request, Response } from 'express';
import TemplateService from '@services/template.service';
// import { User } from '@prisma/client';
// import { CreateUserDto } from '@dtos/users.dto';

class TemplateController {
  public templateService = new TemplateService();

  // public register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userData: CreateUserDto = req.body;
  //     const signUpUserData: User = await this.authService.signup(userData);

  //     res.status(201).json({ data: signUpUserData, message: 'signup' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const findAllUsersData: User[] = await this.userService.findAllUser();

  //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = req.params.id;
  //     const userData: CreateUserDto = req.body;
  //     const updateUserData: User = await this.userService.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default TemplateController;
