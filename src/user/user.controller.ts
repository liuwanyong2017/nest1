/*
 * @Author: liuwanyong2017 2674706698@qq.com
 * @Date: 2022-06-22 22:23:34
 * @LastEditors: liuwanyong2017 2674706698@qq.com
 * @LastEditTime: 2022-06-22 22:26:30
 * @FilePath: /nest/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE@
 */
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  create(@Body() body: Body) {
    console.log(body);
    return 'user created';
  }
}
