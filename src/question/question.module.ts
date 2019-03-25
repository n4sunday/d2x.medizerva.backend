import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { MyQuestion } from './my.question';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [QuestionService,MyQuestion],
})
export class QuestionModule {}
