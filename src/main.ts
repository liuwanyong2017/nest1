/*
 * @Author: liuwanyong2017 2674706698@qq.com
 * @Date: 2022-06-22 22:11:44
 * @LastEditors: liuwanyong2017 2674706698@qq.com
 * @LastEditTime: 2022-06-22 22:29:48
 * @FilePath: /nest/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
