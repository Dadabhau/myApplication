import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[changetext]',
})
export class TextChange {
  @Input() newText: string;
  constructor(private el: ElementRef, private rendere: Renderer2) {}

  @HostListener('click') onClick() {
    if (this.newText) {
      this.rendere.setProperty(
        this.el.nativeElement,
        'textContent',
        this.newText
      );
    }
  }
}
