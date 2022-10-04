import { CreatePupukDto, UpdatePupukDto } from '@dtos/pupuk2.dto';
import { HttpException } from '@exceptions/HttpException';
import { softMiddleware } from '@middlewares/prisma.middleware';
import { PrismaClient, Pupuk } from '@prisma/client';
import { isEmpty } from '@utils/util';

class PupukService {
  public pupuk = new PrismaClient().pupuk;
  public prismaSoft = new PrismaClient();

  public async findAllPupuk(): Promise<Pupuk[]> {
    const allPupuk: Pupuk[] = await this.prismaSoft.pupuk.findMany({ orderBy: { created_at: 'desc' } });
    return allPupuk;
  }

  public async findPupukById(pupukId: string): Promise<Pupuk> {
    if (isEmpty(pupukId)) throw new HttpException(400, 'PupukId is empty');

    const findPupuk: Pupuk = await this.prismaSoft.pupuk.findUnique({ where: { id: pupukId } });
    if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

    return findPupuk;
  }

  public async createPupuk(pupukData: CreatePupukDto): Promise<Pupuk> {
    if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

    const createPupukData: Pupuk = await this.pupuk.create({ data: pupukData });
    return createPupukData;
  }

  public async updatePupuk(pupukId: string, pupukData: UpdatePupukDto): Promise<Pupuk> {
    softMiddleware(this.prismaSoft);

    if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

    const findPupuk: Pupuk = await this.prismaSoft.pupuk.findUnique({ where: { id: pupukId } });
    if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

    const updatePupukData = await this.prismaSoft.pupuk.update({ where: { id: pupukId }, data: pupukData });
    return updatePupukData;
  }

  public async deletePupuk(pupukId: string): Promise<Pupuk> {
    softMiddleware(this.prismaSoft);

    if (isEmpty(pupukId)) throw new HttpException(400, "Pupuk id doesn't exist");

    const findPupuk: Pupuk = await this.prismaSoft.pupuk.findUnique({ where: { id: pupukId } });
    if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

    const deletePupukData = await this.prismaSoft.pupuk.delete({ where: { id: pupukId } });
    return deletePupukData;
  }
}
export default PupukService;
