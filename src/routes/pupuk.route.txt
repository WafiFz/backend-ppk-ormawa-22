import { Router } from 'express';
import PupukController from '@controllers/pupuk.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreatePupukDto, UpdatePupukDto } from '@dtos/pupuk.dto';

class TemplateRoute implements Routes {
  public path = '/pupuk';
  public router = Router();
  public pupukController = new PupukController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, [authMiddleware, validationMiddleware(CreatePupukDto, 'body')], this.pupukController.createPupuk);
    this.router.get(`${this.path}`, authMiddleware, this.pupukController.getAllPupuk);
    this.router.get(`${this.path}/:id`, this.pupukController.getPupukById);
    this.router.put(`${this.path}/:id`, validationMiddleware(UpdatePupukDto, 'body', true), this.pupukController.updatePupuk);
    this.router.delete(`${this.path}/:id`, this.pupukController.deletePupuk);
  }
}

export default TemplateRoute;
