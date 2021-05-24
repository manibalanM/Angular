import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent {

  range:number=220;
  @Output() Player = new EventEmitter<boolean>(); //passing the play button
  @Output() clean = new EventEmitter(); //passing the clean button
  @Output() BPM = new EventEmitter<number>() //pass BPM range details

  PlayPause:String = "play";
  IsPlay:boolean=false;
  isActive()//play button method
  {
    this.PlayPause=this.IsPlay?"Play":"Pause";
    this.IsPlay=!this.IsPlay;
    this.Player.emit(this.IsPlay);
  }
  clearAllSound() //clean button method
  {
      this.clean.emit();
  }
  bpmRange(range: number) //bpm range
  {
    this.BPM.emit(range);
  }
}
