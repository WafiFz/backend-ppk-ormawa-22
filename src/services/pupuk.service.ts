import { PrismaClient, Pupuk } from '@prisma/client';

class PupukService {
  public pupuk = new PrismaClient().pupuk;

  public async findAllPupuk(): Promise<Pupuk[]> {
    const allPupuk: Pupuk[] = await this.pupuk.findMany();
    return allPupuk;
  }
}
export default PupukService;
