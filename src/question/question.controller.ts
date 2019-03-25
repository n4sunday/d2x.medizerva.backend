import {  Controller,
          Get,
          Res,
          HttpStatus,
          Post,
          Req,
          Body
  } from '@nestjs/common';
import { QuestionService } from './question.service';
var bits='',count =0,tempCount

@Controller('')
export class QuestionController {
  constructor(private readonly QuestionService: QuestionService) {}
  
  
  @Get()
  async getQuetion(@Res() res){
    bits='' 
      count = 0
    let status = HttpStatus.OK;
    let response = await this.QuestionService.getQuetion()
    
    return res.status(status).json(response)
  }
  @Post()
  async postQuetion(@Body('order') data, @Res() res) {
    console.log("input "+data)
    let status = HttpStatus.OK
    let temp = await this.QuestionService.Symptom(data)
    if(temp !== undefined){
      bits=''+bits+temp
      count++
      console.log("temp "+bits+'\ncount '+count)
    }
    if( bits.substring(0,1)==='1'){
      tempCount = 8
    }else{
      tempCount = 7
    }
    if(count === tempCount){
      //console.log("FULL")
      let tempData = await this.QuestionService.Algorithm(bits)
      let response ={...tempData,bits:bits}
      bits='' 
      count = 0
      return res.status(status).json(response);
    }
   
    
    
    let tempData = await this.QuestionService.postQuetion(data);
    let response ={...tempData,bits:bits}
    return res.status(status).json(response);
    
    
  }
  
}
