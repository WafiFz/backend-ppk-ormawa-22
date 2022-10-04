import { CreatePupukDto, UpdatePupukDto } from '@dtos/pupuk2.dto';
import { Pupuk } from '@prisma/client';
import PupukService2 from '@services/pupuk2.service';
import { NextFunction, Request, Response } from 'express';

class PupukController2 {
  public pupukService = new PupukService2();

  public getAllPupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPupukData: Pupuk[] = await this.pupukService.findAllPupuk();

      res.status(200).json({ data: findAllPupukData, message: 'find All Pupuk' });
    } catch (error) {
      next(error);
    }
  };

  public getPupukById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const pupukId = req.params.id;
      const findOnePupukData: Pupuk = await this.pupukService.findPupukById(pupukId);

      res.status(200).json({ data: findOnePupukData, message: 'findOne pupuk' });
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

  public updatePupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const pupukId = req.params.id;
      const pupukData: UpdatePupukDto = req.body;
      const updatePupukData: Pupuk = await this.pupukService.updatePupuk(pupukId, pupukData);

      res.status(200).json({ data: updatePupukData, message: 'Pupuk updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const pupukId = req.params.id;
      const deletePupukData: Pupuk = await this.pupukService.deletePupuk(pupukId);

      res.status(200).json({ data: deletePupukData, message: 'Pupuk deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PupukController2;
