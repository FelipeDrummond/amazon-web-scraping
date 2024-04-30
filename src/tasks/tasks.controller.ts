import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskservice: TasksService) {}

    
  @Get(':url')
  async scrape(@Param('url') url: string): Promise<string[]> {
    return this.taskservice.scrape(url);
  }
}
