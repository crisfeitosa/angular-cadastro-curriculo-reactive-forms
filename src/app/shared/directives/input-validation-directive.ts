import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidation]',
  standalone: true,
})
export class InputValidationDirective {
  @Input() errorMessage = 'Campo inválido';

  ngOnInit() {
    console.log('OnInit errorMessage:', this.errorMessage);
  }

  @HostListener('blur') onBlur() {
    console.log('onBlur errorMessage:', this.errorMessage);
  }
}
