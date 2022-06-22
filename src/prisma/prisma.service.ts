/*
 * @Author: liuwanyong2017 2674706698@qq.com
 * @Date: 2022-06-22 23:36:09
 * @LastEditors: liuwanyong2017 2674706698@qq.com
 * @LastEditTime: 2022-06-22 23:36:55
 * @FilePath: /nest/src/prisma/prisma.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
