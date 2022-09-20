import { CreatePupukDto } from '@dtos/pupuk.dto';
import { HttpException } from '@exceptions/HttpException';
import { PrismaClient, Pupuk } from '@prisma/client';
import { isEmpty } from '@utils/util';

class PupukService {
  public pupuk = new PrismaClient().pupuk;

  public async findAllPupuk(): Promise<Pupuk[]> {
    const allPupuk: Pupuk[] = await this.pupuk.findMany();
    return allPupuk;
  }

  public async createPupuk(pupukData: CreatePupukDto): Promise<Pupuk> {
    if (isEmpty(pupukData)) throw new HttpException(400, 'pupukData is empty');

    const createPupukData: Pupuk = await this.pupuk.create({ data: pupukData });
    return createPupukData;
  }
}
export default PupukService;
