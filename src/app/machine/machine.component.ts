import { Component, Input } from '@angular/core';
import { AppServices } from '../app.service';
import { Sounds } from '../Sounds';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
  @Input() PositionTrack!:number; // current position from AppComponent
  
  sounds!: Sounds[];
  constructor(private appServices: AppServices) {
    this.sounds = appServices.getSource();
    
   }
}
