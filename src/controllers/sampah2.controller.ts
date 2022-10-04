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

  // public getPupukById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const pupukId = req.params.id;
  //     const findOnePupukData: Pupuk = await this.pupukService.findPupukById(pupukId);

  //     res.status(200).json({ data: findOnePupukData, message: 'findOne pupuk' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createSampah = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sampahData: CreateSampahDto = req.body;
      const createSampahData: Sampah = await this.sampahService.createSampah(sampahData);

      res.status(201).json({ data: createSampahData, message: 'Sampah created' });
    } catch (error) {
      next(error);
    }
  };

  // public updatePupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const pupukId = req.params.id;
  //     const pupukData: UpdatePupukDto = req.body;
  //     const updatePupukData: Pupuk = await this.pupukService.updatePupuk(pupukId, pupukData);

  //     res.status(200).json({ data: updatePupukData, message: 'Pupuk updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deletePupuk = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const pupukId = req.params.id;
  //     const deletePupukData: Pupuk = await this.pupukService.deletePupuk(pupukId);

  //     res.status(200).json({ data: deletePupukData, message: 'Pupuk deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default SampahController2;
