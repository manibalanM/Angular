import { Component, Input, OnInit } from '@angular/core';
import { Points } from 'src/app/Points';


@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  @Input() InstrumentsName?: string;
  @Input() positions!:Points[];
  @Input() Position!:number;
  cls:any;
  style:any;
  pos:number=0;
  constructor() { }
  ngOnInit(): void {
  }
  // change the active in services 
  //true to false and false to true
  isActive(position:Points) 
  {
    position.active = !position.active;
  }

  //enable position blinking in the position while playing 
  activer(position:Points)
  {
    if(position.pos === this.Position-1)
    {
      this.cls={emptyContent:!position.active,filledContent:position.active, boxShodow:true}
      return this.cls;
    }                             
    this.cls={emptyContent:!position.active, filledContent:position.active}         
    return this.cls;
  }
 

  
}
