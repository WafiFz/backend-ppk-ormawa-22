import { Router } from 'express';
import PupukController2 from '@controllers/pupuk2.controller';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware, authAdminMiddleware } from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreatePupukDto, UpdatePupukDto } from '@dtos/pupuk2.dto';

class PupukRoute2 implements Routes {
  public path = '/v2/pupuk';
  public router = Router();
  public pupukController = new PupukController2();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, [validationMiddleware(CreatePupukDto, 'body')], this.pupukController.createPupuk);
    this.router.get(`${this.path}`, authAdminMiddleware, this.pupukController.getAllPupuk);
    this.router.get(`${this.path}/:id`, authAdminMiddleware, this.pupukController.getPupukById);
    this.router.put(`${this.path}/:id`, authAdminMiddleware, validationMiddleware(UpdatePupukDto, 'body', true), this.pupukController.updatePupuk);
    this.router.delete(`${this.path}/:id`, authAdminMiddleware, this.pupukController.deletePupuk);
  }
}

export default PupukRoute2;
