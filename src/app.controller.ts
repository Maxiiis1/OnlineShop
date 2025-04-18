import { Controller, Get, Render, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/')
  @Render('index')
  renderHome(@Req() req: Request, @Query('name') name?:string) {
    const isAuthenticated = req.query.auth === 'true';
    const username = isAuthenticated ? name : null;
    return { isAuthenticated, username };
  }


  @Get('/catalog')
  @Render('catalog')
  getCatalogPage() {
    return {};
  }

  @Get('/login')
  @Render('login')
  getLoginPage() {
    return {};
  }

  @Get('/orders')
  @Render('orders')
  getOrdersPage() {
    return {};
  }

  @Get('/about')
  @Render('about')
  getAboutPage() {
    return {};
  }

  @Get('/profile')
  @Render('profile')
  getProfilePage() {
    return {};
  }

  @Get('/tasks')
  @Render('tasks')
  getTasksPage() {
    return {};
  }

}
