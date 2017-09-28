import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightBackgroundDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'Yellow';
    }
}
