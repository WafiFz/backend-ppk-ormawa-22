import { PrismaClient } from '@prisma/client';

export const softMiddleware = (prisma: PrismaClient) => {
  prisma.$use(async (params, next) => {
    if (params.action == 'findUnique') {
      params.action = 'findFirst';
      const where = params.args.where;
      // Clear out the filters and reapply them so we can change the shape of a composite key (WhereUniqueInput)
      // to fit the shape of what findFirst would expect (WhereInput)
      // We do that by taking anything that isn't an Object and just putting it right back in,
      // but if we encounter an object we have to iterate through its members to pull them out one level.
      params.args.where = {};
      for (const arg of Object.entries(where)) {
        if (typeof arg[1] !== 'object') {
          params.args.where[arg[0]] = arg[1];
        } else {
          for (const subarg of Object.entries(arg[1] as Record<string, unknown>)) {
            params.args.where[subarg[0]] = subarg[1];
          }
        }
      }
      params.args.where['deleted_at'] = null;
    }
    if (params.action == 'findMany') {
      if (!params.args) {
        params.args = {};
      }
      if (params.args?.where != undefined) {
        if (params.args.where.deleted_at == undefined) {
          params.args.where['deleted_at'] = null;
        }
      } else {
        params.args['where'] = { deleted_at: null };
      }
    }
    return next(params);
  });
  prisma.$use(async (params, next) => {
    if (params.action == 'updateMany' || params.action == 'update') {
      if (!params.args) {
        params.args = {};
      }
      if (!params.args.data) {
        params.args.data = {};
      }
      params.args.data['updated_at'] = new Date();
    }
    return next(params);
  });
  prisma.$use(async (params, next) => {
    if (params.action == 'delete') {
      params.action = 'update';
      params.args['data'] = { deleted_at: new Date() };
    }
    if (params.action == 'deleteMany') {
      if (!params.args) {
        params.args = {};
      }
      params.action = 'updateMany';
      if (params.args?.data != undefined) {
        params.args.data['deleted_at'] = new Date();
      } else {
        params.args['data'] = { deleted_at: new Date() };
      }
    }
    return next(params);
  });
};
