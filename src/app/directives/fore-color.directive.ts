import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appForeColor]'
})
export class ForeColorDirective implements OnInit {

  // HOST BINDING IS EASIEST WAY
  @HostBinding('style.color') color = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    // this.elementRef.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') mouseenter() {
    this.color = 'green';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = 'red';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }
}
