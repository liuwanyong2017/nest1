/*
 * @Author: liuwanyong2017 2674706698@qq.com
 * @Date: 2022-06-22 22:23:34
 * @LastEditors: liuwanyong2017 2674706698@qq.com
 * @LastEditTime: 2022-06-23 00:06:19
 * @FilePath: /nest/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE@
 */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() userData: { name: string; password: string; email: string }) {
    console.log(userData);

    return this.userService.createUser(userData);
  }
}
