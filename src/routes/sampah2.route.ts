import { Router } from 'express';
import SampahController2 from '@controllers/sampah2.controller';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware, authAdminMiddleware } from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateSampahDto, UpdateSampahDto } from '@dtos/sampah2.dto';

class SampahRoute2 implements Routes {
  public path = '/v2/sampah';
  public router = Router();
  public sampahController = new SampahController2();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, [authMiddleware, validationMiddleware(CreateSampahDto, 'body')], this.sampahController.createSampah);
    this.router.get(`${this.path}`, authAdminMiddleware, this.sampahController.getAllSampah);
    this.router.get(`${this.path}/:id`, authAdminMiddleware, this.sampahController.getSampahById);
    this.router.put(`${this.path}/:id`, authAdminMiddleware, validationMiddleware(UpdateSampahDto, 'body', true), this.sampahController.updateSampah);
    this.router.delete(`${this.path}/:id`, authAdminMiddleware, this.sampahController.deleteSampah);
  }
}

export default SampahRoute2;
