import { Controller, Get } from "@nestjs/common"

// All in nest js is a class, but to indicate this will be a controller (GET /example/something) we have to use the @Controller decorator
@Controller()
export class AppController {

  // In order to indicate this will be a GET router we have to use the other decorator call @Get()
  // http://localhost:3333/ this is the get, theres is no path yet http://localhost:3333/NOTHINGYET
  @Get()
  getAllIncomeReports() {
    return {}
  }
}
