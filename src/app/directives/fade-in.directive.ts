import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective {
  constructor(private renderer: Renderer2, private el : ElementRef) {}
  @HostListener('window:load')
  fadeIn() : any {
    this.renderer.addClass(this.el.nativeElement, 'fade-in');
  }
}
