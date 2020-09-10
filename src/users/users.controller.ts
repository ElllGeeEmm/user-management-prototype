import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  index (@Req() request: Request) {
    return this.userService.findAll()
  }

  @Post()
  create(@Req() request: Request) {
    return this.userService.create(request.body)
  }
}
