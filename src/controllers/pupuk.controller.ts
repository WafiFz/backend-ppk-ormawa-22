import { CreatePupukDto } from '@dtos/pupuk.dto';
import { Pupuk } from '@prisma/client';
import PupukService from '@services/pupuk.service';
import { NextFunction, Request, Response } from 'express';

class PupukController {
  public pupukService = new PupukService();

  public getAllPupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPupukData: Pupuk[] = await this.pupukService.findAllPupuk();

      res.status(200).json({ data: findAllPupukData, message: 'find All Pupuk' });
    } catch (error) {
      next(error);
    }
  };

  public createPupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const pupukData: CreatePupukDto = req.body;
      const createPupukData: Pupuk = await this.pupukService.createPupuk(pupukData);

      res.status(201).json({ data: createPupukData, message: 'Pupuk created' });
    } catch (error) {
      next(error);
    }
  };
}

export default PupukController;
