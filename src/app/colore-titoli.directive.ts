import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColoreTitoli]'
})
export class ColoreTitoliDirective implements OnChanges {

  @Input() appColoreTitoli : number |undefined = undefined;
  @Input() range : number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (!this.appColoreTitoli){
      return;
    }

     if (this.appColoreTitoli <= /* this.range */ 6) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'brown');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    }
  }

}
