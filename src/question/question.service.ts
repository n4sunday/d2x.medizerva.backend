import { Injectable } from '@nestjs/common';
import { MyQuestion } from './my.question'

@Injectable()
export class QuestionService {
  constructor(private readonly MyQuestion: MyQuestion) {}
  

  getHello(): string {
    return 'Server is OK!!';
  }
  
   getQuetion(){
    return this.MyQuestion.getQuestion().QT0
  }
  Algorithm(bits){
    
    if(bits){
      var bit = bits.split('')
      for(let i=0;i<bit.length;i++){
        bit[i]=+bit[i]
      }
      if((bit[0]&&bit[1]&&bit[2]) && (bit[3]||bit[4]||bit[5])) return this.MyQuestion.getHowToTreat().infected
      else if((bit[0]&&bit[1]&&bit[2]) || (bit[3]&&bit[4]&&bit[5])) return this.MyQuestion.getHowToTreat().infected
      else if((bit[0]||bit[3]||bit[4]||bit[5])) return this.MyQuestion.getHowToTreat().infected
      else return this.MyQuestion.getHowToTreat().not_infected
    }
  }
  Symptom(data){
    console.log("data "+data)
    if(data.length<=4){
      console.log("data.substring(3) :"+data.substring(3))
      if(data.substring(3)==='Y') return 1
      else if(data.substring(3)==='N') return 0
    }else{
      console.log("data.substring(4) :"+data.substring(4))
      if(data.substring(4)==='Y') return 1
      else if(data.substring(4)==='N') return 0
    }
  }
  postQuetion(order){
    if(order.substring(0,1)==="S"){
      if(order.substring(1)==='T0U1'){
        return this.MyQuestion.getSummit().ST0U1
      }else if(order.substring(1)==='T1U1'){
        return this.MyQuestion.getSummit().ST1U1
      }else if(order.substring(1)==='T2U2'){
        return this.MyQuestion.getSummit().ST2U2
      }else if(order.substring(1)==='#'){
        return this.MyQuestion.getSummit().S0
      }
    }
    else{
      if(order.substring(1) === 'T1'){
        return this.MyQuestion.getQuestion().QT1
      }
      else if(order.substring(1)==='T2'){
        return this.MyQuestion.getQuestion().QT2
      }
      else if(order.substring(1)==='T3'){
        return this.MyQuestion.getQuestion().QT3
      }else if(order.substring(1)==='T3_Y'){
        return this.MyQuestion.getQuestion().QT3_
      }else if(order.substring(1)==='T3_N'){
        return this.MyQuestion.getQuestion().QT4
      }
      else if(order.substring(1)==='T4Y'|| order.substring(1)==='T4N'){
        return this.MyQuestion.getQuestion().QT4
      }
      else if(order.substring(1)==='T5Y'|| order.substring(1)==='T5N'){
        return this.MyQuestion.getQuestion().QT5
      }
      else if(order.substring(1)==='T6Y'|| order.substring(1)==='T6N'){
        return this.MyQuestion.getQuestion().QT6
      }
      else if(order.substring(1)==='T7Y'|| order.substring(1)==='T7N'){
        return this.MyQuestion.getQuestion().QT7
      }
      else if(order.substring(1)==='T8Y' || order.substring(1)==='T8N'){
        return this.MyQuestion.getQuestion().QT8
      }
      else if(order.substring(1)==='T9Y' || order.substring(1)==='T9N' ){
        return this.MyQuestion.getQuestion().QT9
      }
      else if(order.substring(1)==='T10Y' || order.substring(1)==='T10N' ){
        
      }
    }
  }
}
