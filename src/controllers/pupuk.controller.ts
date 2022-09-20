import { NextFunction, Request, Response } from 'express';
import PupukService from '@services/pupuk.service';
import { Pupuk } from '@prisma/client';

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
}

export default PupukController;
