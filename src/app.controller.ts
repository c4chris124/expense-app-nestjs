import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { data } from './data';
import { ReportType } from './data';
import { v4 as uuid } from 'uuid';
// All in nest js is a class, but to indicate this will be a controller (GET /example/something) we have to use the @Controller decorator
// @Controller()
// @Controller('hi')
// http://localhost:3333/if(controller decorator) + if(method decorators)
// http://localhost:3333/hi/hello
@Controller('report/:type')
export class AppController {
  // In order to indicate this will be a GET router we have to use the other decorator call @Get()
  // http://localhost:3333/ this is the get, theres is no path yet http://localhost:3333/NOTHINGYET
  // @Get()
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
// 1:21
