import { Component } from '@angular/core';
import  { AppServices } from './app.service'
import { Sounds } from "./Sounds";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServices]
})
export class AppComponent {
  sounds: Sounds[];

  constructor(private appSerives: AppServices){
    this.sounds = appSerives.getSource();
  }
  PositionTaken:number=0;
  position: any;
  bpm:number = 60000/220;
  state:any;
  IsActive(status: boolean) //play button 
  {
    this.state=status;
    this.position = status?setInterval(()=>this.audioTracker(this.PositionRise()), this.bpm):clearInterval(this.position);
  }
  PositionRise():number //increase the position
  {
    if(this.PositionTaken>=8)// checking the position is less than 7
      this.PositionTaken=0;
    return this.PositionTaken++;
  }
  //calculate the bpm
  calculateBPM(bpm:any) 
  {
    this.bpm = 60000/bpm;
    clearInterval(this.position);
    this.IsActive(this.state);
  }
  //check the position if it 
  audioTracker(position:number):void 
  {
    
    for(var sound of this.sounds)
      for(var point of sound.points)
        if(point.active &&(point.pos === position))
          this.audioPlayer(sound.src);
  }
  //clear all the active to false
  clearActive(event: any) 
  {
    for(var sound of this.sounds)
      for(var point of sound.points)
        point.active=false;
    this.PositionTaken=0;
  }
  //play the sound effect
  audioPlayer(source: any) 
  {
    const audio = new Audio();
    audio.src=source;
    audio.play();
  }

}
