import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { AccountsService } from './accounts.service.js';
import { CreateAccountDTO } from './dto/create-account.dto.js';
import type { Account } from './interfaces/account.interface.js';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}
  @Get()
  findAll(): Account[] {
    return this.accountService.findAll();
  }
  @Post()
  create(@Body() createAccountDTO: CreateAccountDTO): Account {
    return this.accountService.create(createAccountDTO);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Account {
    return this.accountService.findOne(id);
  }
}
