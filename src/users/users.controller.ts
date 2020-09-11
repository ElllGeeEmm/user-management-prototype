import { Controller, Get, Req, Post, Body, Patch, Param } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  index(@Req() request: Request) {
    return this.userService.read();
  }

  @Get(':id')
  async view(@Param('id') userId: string) {
    console.log(userId);
    const user = await this.userService.readOne(userId);

    return user;
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  edit(@Param('id') userId: string, @Body() user: CreateUserDto) {
    return this.userService.update(userId, user);
  }
}
