import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  index (@Req() request: Request) {
    return this.userService.findAll()
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user)
  }
}
