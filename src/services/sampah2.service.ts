import { CreateSampahDto, UpdateSampahDto } from '@dtos/sampah2.dto';
import { HttpException } from '@exceptions/HttpException';
import { softMiddleware } from '@middlewares/prisma.middleware';
import { PrismaClient, Sampah, User } from '@prisma/client';
import { isEmpty } from '@utils/util';

class SampahService {
  public sampah = new PrismaClient().sampah;
  public prismaSoft = new PrismaClient();

  public async findAllSampah(): Promise<Sampah[]> {
    const allSampah: Sampah[] = await this.prismaSoft.sampah.findMany({ orderBy: { created_at: 'desc' } });
    return allSampah;
  }

  public async findSampahById(sampahId: string): Promise<Sampah> {
    if (isEmpty(sampahId)) throw new HttpException(400, 'PupukId is empty');

    const findSampah: Sampah = await this.prismaSoft.sampah.findUnique({ where: { id: sampahId } });
    if (!findSampah) throw new HttpException(409, "Pupuk doesn't exist");

    return findSampah;
  }

  public async createSampah(sampahData: CreateSampahDto): Promise<Sampah> {
    if (isEmpty(sampahData)) throw new HttpException(400, 'sampahData is empty');

    const createSampahData: Sampah = await this.sampah.create({ data: sampahData });
    return createSampahData;
  }

  public async updateSampah(sampahId: string, sampahData: UpdateSampahDto): Promise<Sampah> {
    softMiddleware(this.prismaSoft);

    if (isEmpty(sampahData)) throw new HttpException(400, 'sampahData is empty');

    const findSampah: Sampah = await this.prismaSoft.sampah.findUnique({ where: { id: sampahId } });
    if (!findSampah) throw new HttpException(409, "Sampah doesn't exist");

    const updateSampahData = await this.prismaSoft.sampah.update({ where: { id: sampahId }, data: sampahData });
    return updateSampahData;
  }

  public async deleteSampah(sampahId: string): Promise<Sampah> {
    softMiddleware(this.prismaSoft);

    if (isEmpty(sampahId)) throw new HttpException(400, "Sampah id doesn't exist");

    const findSampah: Sampah = await this.prismaSoft.sampah.findUnique({ where: { id: sampahId } });
    if (!findSampah) throw new HttpException(409, "Sampah doesn't exist");

    const deleteSampahData = await this.prismaSoft.sampah.delete({ where: { id: sampahId } });
    return deleteSampahData;
  }
}
export default SampahService;
