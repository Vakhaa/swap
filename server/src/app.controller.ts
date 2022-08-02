import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      message: this.appService.getHello()
    };
  };

  @Get("/random_number_page")
  getRandomNumberPage(){
    return '<div> '+
    '<h1>Your magic random number is'+
    ((new Date()).getSeconds() % 10)
    +'</h1>' +
    '<span> 8D </span>'+
    '<button onclick="document.location.reload()" >refresh</button>'+
    '</div>';
  };
  
  @Get("/random_number")
  getRandomNumber(){
    return {
      number: ((new Date()).getSeconds() % 10)
    };
  };
};
