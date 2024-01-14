import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective {

  constructor(private el : ElementRef, private renderer : Renderer2) { }
  @HostListener('window:scroll')
  onScroll() : any {
      const scrollPosition = window.scrollY;
      const offset = this.el.nativeElement.offsetTop; 
      const windowHeight = window.innerHeight;
      if (scrollPosition > offset - windowHeight){
        this.renderer.addClass(this.el.nativeElement , 'visible');
      }
  }
}
