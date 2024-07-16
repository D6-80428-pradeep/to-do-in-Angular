import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer-reward',
  standalone: true,
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './timer-reward.component.html',
  styleUrl: './timer-reward.component.css'
})
export class TimerRewardComponent {

  points: number = 0;
  currentTime:Date

  displayDate:Date;
  constructor(){
    this.currentTime=new Date();
    this.displayDate=new Date();
  }
  ngOnInit(){
    setInterval(() => {
      this.currentTime=new Date();
      }, 1000);
  }
  prevDay(): void {
    this.displayDate.setDate(this.displayDate.getDate() - 1);
    this.displayDate = new Date(this.displayDate);
  }

  nextDay(): void {
    this.displayDate.setDate(this.displayDate.getDate() + 1);
    this.displayDate = new Date(this.displayDate);
  }


}
