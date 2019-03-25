import { Injectable } from '@nestjs/common'


@Injectable()
export class MyQuestion{
    getHowToTreat(){
        let data = {
          infected:{
              type : 'summit',
              title : 'คุณมีอาการท้องเสียแบบติดเชื้อ',
              symptom : {
                count : 0,
                },
              choice : 'การรักษา',
              nextOrder : 'S#',
              state:'A',
              order : 'S#'
            },
          not_infected:{
              type : 'summit',
              title : 'คุณมีอาการท้องเสียแบบไม่ติดเชื้อ',
              symptom : {
                count : 0,
                },
              choice : 'การรักษา',
              nextOrder : 'S#',
              state:'A',
              order : 'S#'
            }
          }
          return data
    }
    getQuestion(){
        let data ={
            QT0 : {
                type : 'quetion',
                title : 'มีอาการถ่ายบ่อย,ถ่ายเหลวมากกว่า 3 ครั้งต่อวัน',
                symptom : {
                    count : 2,
                    U1:{
                    title:'ไม่ใช่',
                    nextOrder:'ST0U1',
                    status:false,
                    choice : 1
                    },
                    U2:{
                    title:'ใช่',
                    nextOrder:'QT1',
                    status:true,
                    choice : 2,
                    historyData : 'คุณมีมีอาการถ่ายบ่อย และเหลวมากกว่า 3 ครั้งต่อวัน'
                    },
                },
                state:1,
                order : 'QT0',
            },
            QT1:{
              type : 'quetion',
              title : 'คุณมีอายุอยู่ในช่วงใด',
              symptom : {
                count : 2,
                U1:{
                  title:'น้อยกว่า 15 ปี',
                  nextOrder:'ST1U1',
                  status:true,
                  choice : 1,
                  historyData : 'มีอายุน้อยกว่า 15 ปี'
                },
                U2:{
                  title:'มากกว่า 15 ปี',
                  nextOrder:'QT2',
                  status:false,
                  choice : 2,
                  historyData : 'มีอายุมากกว่า 15 ปี'
                },
              },
              state:2,
              order : 'QT1',
            },
            QT2:{
              type : 'quetion',
              title : 'คุณมีอาการท้องเสียมาแล้วกี่วัน',
              symptom : {
                count : 2,
                U1:{
                  title:'ไม่เกิน 15 วัน',
                  nextOrder:'QT3',
                  status:false,
                  choice : 1,
                  historyData : 'มีอาการท้องเสียน้อยกว่า 15 วัน'
                },
                U2:{
                  title:'ท้องเสียมาแล้วมากกว่า 30 วัน',
                  nextOrder:'ST2U2',
                  status:true,
                  choice : 2,
                  historyData : 'มีอากาศท้องเสียมาแล้วมากกว่า 30 วัน'
                },
              },
              state:3,
              order : 'QT2',
            },
            QT3:{
              type : 'quetion',
              title : 'มีไข้ร่วมด้วย, มีอาการปวดศรีษะ หรือไม่ ',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT3_Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีไข้ร่วม และอาการปวดศรีษะ'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT3_N',
                  status:false,
                  choice : 2
                },
              },
              state:4,
              order : 'QT3',
            },
            QT3_:{
              type : 'quetion',
              title : 'มีอาการไข้อ่อนหรือมีไข้สูง',
              symptom : {
                count : 2,
                U1:{
                  title:'มีไข้อ่อนๆ',
                  nextOrder:'QT4Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีอาการไข้อ่อนๆ'
                },
                U2:{
                  title:'มีไข้สูง',
                  nextOrder:'QT4N',
                  status:true,
                  choice : 2,
                  historyData : 'มีอาการไข้สูง'
                },
              },
              state:4,
              order : 'QT3',
            },
            QT4:{
              type : 'quetion',
              title : 'ปวดเมื่อยตามตัว หรือไม่',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT5Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีอาการปวดเมื่อยตามตัว'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT5N',
                  choice : 2
                },
              },
              state:5,
              order : 'QT4',
            },
            QT5:{
              type : 'quetion',
              title : 'มีอาการปวดบิด ปวดเบ่งหรือไม่ ',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT6Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีอาการปวดบิด ปวดเบ่ง'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT6N',
                  status:false,
                  choice : 2
                },
              },
              state:6,
              order : 'QT5',
            },
            QT6:{
              type : 'quetion',
              title : 'ถ่ายเป็นฟอง กลิ่นเหม็นเปรี้ยว หรือไม่ ',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT7Y',
                  status:true,
                  choice : 1,
                  historyData : 'ถ่ายเป็นฟอง กลิ่นเหม็นเปรี้ยว'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT7N',
                  status:false,
                  choice : 2
                },
              },
              state:7,
              order : 'QT6',
            },
            QT7:{
              type : 'quetion',
              title : 'อุจจาระมีกลิ่นเหม็นเหมือนหัวกุ้งเน่า หรือไม่ ',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT8Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีอุจจาระมีกลิ่นเหม็นเหมือนหัวกุ้งเน่า'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT8N',
                  status:false,
                  choice : 2
                },
              },
              state:8,
              order : 'QT7',},
            QT8:{
              type : 'quetion',
              title : 'มีอาการอ่อนเพลียหรือไม่ ',
              symptom : {
                count : 2,
                U1:{
                  title:'ใช่',
                  nextOrder:'QT9Y',
                  status:true,
                  choice : 1,
                  historyData : 'มีอาการอ่อนเพลีย'
                },
                U2:{
                  title:'ไม่ใช่',
                  nextOrder:'QT9N',
                  status:false,
                  choice : 2
                },
              },
              state:9,
              order : 'QT8',
            },
            QT9:{
              type : 'quetion',
              title : 'สามารถหยุดดำเนินกิจกรรมประจำวันและการทำงานเพื่อให้ร่างกายพักผ่อนได้หรือไม่',
              symptom : {
                count : 2,
                U1:{
                  title:'หยุดได้',
                  nextOrder:'QT10Y',
                  status:true,
                  choice : 1,
                  historyData : 'สามารถหยุดดำเนินกิจกรรมอื่นๆ ได้'
                },
                U2:{
                  title:'หยุดไม่ได้',
                  nextOrder:'QT10N',
                  status:true,
                  choice : 2,
                  historyData : 'ไม่สามารถหยุดดำเนินกิจกรรมอื่นๆ ได้'
                },
              },
              state:10,
              order : 'QT9',
            },

        }
        return data
    }
    getSummit(){
      let data = {
        ST0U1:{
          type : 'summit',
          title : 'คุณปกติดี',
          symptom : {
            count : 0,
            },
          choice : 'สิ้นสุดการทำแบบทดสอบ',
          nextOrder : 'S#',
          state:'A',
          order : 'ST0U1'
        },
        ST1U1:{
          type : 'summit',
          title : 'แนะนำให้ไปพบแพทย์ทันที',
          symptom : {
            count : 0,
            },
          choice : 'ขอเส้นทางโรงพยาบาล',
          nextOrder : 'S#',
          state:'B',
          order : 'ST1U1'
        },
        ST2U2:{
          type : 'summit',
          title : 'คุณมีอาการท้องเสียเรื้อรัง ',
          symptom : {
            count : 0,
            },
          choice : 'ขอเส้นทางโรงพยาบาล',
          nextOrder : 'S#',
          state:'C',
          order : 'ST2U2'
        },
        S0:{
          type:'developing',
          title : 'กำลังพัฒนา',
          symptom : {
            count : 0,
            },
          choice : 'END',
          nextOrder : 'S#',
          state:'Z',
          order : 'S#'
        },
      }
      return data
    }
      

}