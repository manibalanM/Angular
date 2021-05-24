import { Directive, ElementRef, HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight("2px solid white")
  }
  @HostListener('mouseleave')
  onMouseOut()
  {
    this.highlight("1px solid white");
  }
  private highlight(BorderSize:string)
  {
    this.el.nativeElement.style.border = BorderSize;
  }
}
