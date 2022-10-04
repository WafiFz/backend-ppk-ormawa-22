import { CreateSampahDto, UpdateSampahDto } from '@dtos/sampah2.dto';
import { HttpException } from '@exceptions/HttpException';
import { softMiddleware } from '@middlewares/prisma.middleware';
import { PrismaClient, Sampah, User } from '@prisma/client';
import { isEmpty } from '@utils/util';

class SampahService {
  public sampah = new PrismaClient().sampah;
  public prismaSoft = new PrismaClient();

  public async findAllSampah(): Promise<Sampah[]> {
    const allSampah: Sampah[] = await this.prismaSoft.sampah.findMany();
    return allSampah;
  }

  // public async findPupukById(pupukId: string): Promise<Pupuk> {
  //   if (isEmpty(pupukId)) throw new HttpException(400, 'PupukId is empty');

  //   const findPupuk: Pupuk = await this.prismaSoft.sampah.findUnique({ where: { id: pupukId } });
  //   if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

  //   return findPupuk;
  // }

  public async createSampah(sampahData: CreateSampahDto): Promise<Sampah> {
    if (isEmpty(sampahData)) throw new HttpException(400, 'sampahData is empty');

    const createSampahData: Sampah = await this.sampah.create({ data: sampahData });
    return createSampahData;
  }

  // public async updatePupuk(pupukId: string, pupukData: UpdatePupukDto): Promise<Pupuk> {
  //   softMiddleware(this.prismaSoft);

  //   if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

  //   const findPupuk: Pupuk = await this.prismaSoft.sampah.findUnique({ where: { id: pupukId } });
  //   if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

  //   const updatePupukData = await this.prismaSoft.sampah.update({ where: { id: pupukId }, data: pupukData });
  //   return updatePupukData;
  // }

  // public async deletePupuk(pupukId: string): Promise<Pupuk> {
  //   softMiddleware(this.prismaSoft);

  //   if (isEmpty(pupukId)) throw new HttpException(400, "Pupuk id doesn't exist");

  //   const findPupuk: Pupuk = await this.prismaSoft.sampah.findUnique({ where: { id: pupukId } });
  //   if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

  //   const deletePupukData = await this.prismaSoft.sampah.delete({ where: { id: pupukId } });
  //   return deletePupukData;
  // }
}
export default SampahService;
