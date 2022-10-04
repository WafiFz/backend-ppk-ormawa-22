import { CreateSampahDto, UpdateSampahDto } from '@dtos/sampah2.dto';
import { Sampah, User } from '@prisma/client';
import SampahService2 from '@services/sampah2.service';
import { NextFunction, Request, Response } from 'express';

class SampahController2 {
  public sampahService = new SampahService2();

  public getAllSampah = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllSampahData: Sampah[] = await this.sampahService.findAllSampah();

      res.status(200).json({ data: findAllSampahData, message: 'find All Sampah' });
    } catch (error) {
      next(error);
    }
  };

  public getSampahById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sampahId = req.params.id;
      const findOnePupukData: Sampah = await this.sampahService.findSampahById(sampahId);

      res.status(200).json({ data: findOnePupukData, message: 'findOne sampah' });
    } catch (error) {
      next(error);
    }
  };

  public createSampah = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sampahData: CreateSampahDto = req.body;
      const createSampahData: Sampah = await this.sampahService.createSampah(sampahData);

      res.status(201).json({ data: createSampahData, message: 'Sampah created' });
    } catch (error) {
      next(error);
    }
  };

  public updateSampah = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sampahId = req.params.id;
      const sampahData: UpdateSampahDto = req.body;
      const updateSampahData: Sampah = await this.sampahService.updateSampah(sampahId, sampahData);

      res.status(200).json({ data: updateSampahData, message: 'Sampah updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteSampah = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sampahId = req.params.id;
      const deletePupukData: Sampah = await this.sampahService.deleteSampah(sampahId);

      res.status(200).json({ data: deletePupukData, message: 'Sampah deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default SampahController2;
