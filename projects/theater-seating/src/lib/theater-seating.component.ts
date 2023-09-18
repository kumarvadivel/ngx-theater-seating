import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sampleConfig } from './data';

@Component({
  selector: 'ngx-theater-seating',
  templateUrl:'theater-seating.component.html',
  styleUrls: [
    'theater-seating.component.scss',
    'mobile-theater-seating.component.scss'
  ]
})
export class TheaterSeatingComponent implements OnInit {

  @Input() config:any
  @Output() onSelect = new EventEmitter()
  selectedSeats:Array<any>=[];
  ngOnInit(): void {
    this.config = sampleConfig

  }
 getRand(seat:any){
  if(seat.iconCode){
    return seat.iconCode
  }
    return seat.iconCode= Math.floor(Math.random() * 3) + 1
  }

  selectSeat(seat: any,row: any,group: any){
    if(!seat.isBooked){
      let selectResult
      let selectedObj:any
      if(!seat.isSelected){
        seat.isSelected=true
         selectedObj={
          group:group.group,
          row:row.name,
          seat:seat.number
        }
        this.selectedSeats.push(selectedObj)
         selectResult = {
          action:"SELECT",
          currentSelectedSeat:selectedObj,
          selectedSeats:this.selectedSeats
        }
      }else{
        seat.isSelected=false
         selectedObj={
          group:group.group,
          row:row.name,
          seat:seat.number
        }
        this.selectedSeats = JSON.parse(JSON.stringify(this.selectedSeats.filter(obj => JSON.stringify(obj) !== JSON.stringify(selectedObj))));
        selectResult = {
          action:"DE_SELECT",
          currentSelectedSeat:selectedObj,
          selectedSeats:this.selectedSeats
        }
      }
      this.onSelect.emit(selectResult)
    }
  }

}
