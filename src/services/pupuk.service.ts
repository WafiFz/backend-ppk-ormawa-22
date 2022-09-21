import { CreatePupukDto, UpdatePupukDto } from '@dtos/pupuk.dto';
import { HttpException } from '@exceptions/HttpException';
import { PrismaClient, Pupuk } from '@prisma/client';
import { isEmpty } from '@utils/util';
import { softMiddleware } from '@middlewares/prisma.middleware';

class PupukService {
  public pupuk = new PrismaClient().pupuk;
  public pupukSoft = new PrismaClient();

  public async findAllPupuk(): Promise<Pupuk[]> {
    const allPupuk: Pupuk[] = await this.pupuk.findMany();
    return allPupuk;
  }

  public async createPupuk(pupukData: CreatePupukDto): Promise<Pupuk> {
    if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

    const createPupukData: Pupuk = await this.pupuk.create({ data: pupukData });
    return createPupukData;
  }

  public async updatePupuk(pupukId: string, pupukData: UpdatePupukDto): Promise<Pupuk> {
    softMiddleware(this.pupukSoft);

    if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

    const findPupuk: Pupuk = await this.pupuk.findUnique({ where: { id: pupukId } });
    if (!findPupuk) throw new HttpException(409, "Pupuk doesn't exist");

    const updatePupukData = await this.pupukSoft.pupuk.update({ where: { id: pupukId }, data: pupukData });
    return updatePupukData;
  }
}
export default PupukService;
