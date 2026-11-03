import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from './interfaces/account.interface.js';
import { CreateAccountDTO } from './dto/create-account.dto.js';

@Injectable()
export class AccountsService {
  private readonly accounts: Account[] = [];
  private idCounter = 1;

  create(createAccountDTO: CreateAccountDTO): Account {
    const newAccount: Account = {
      id: this.idCounter++,
      ...createAccountDTO,
      balance: 0,
      createdAt: new Date().toISOString(),
    };
    this.accounts.push(newAccount);
    return newAccount;
  }
  findAll(): Account[] {
    return this.accounts;
  }
  findOne(id: number): Account {
    const account = this.accounts.find((acc) => acc.id === id);
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    return account;
  }
}
