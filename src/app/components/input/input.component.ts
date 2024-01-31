import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() name: string = '';
  @Input() ngModelInput: any = '';
  @Output() ngModelInputChange = new EventEmitter<any>();
  @Input() mask: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() width: string = '240px';
  @Input() disabled: boolean = false;
  @Input() bgColor = '#424242';

  changeValue(newValue: any) {
    this.ngModelInput = newValue;
    this.ngModelInputChange.emit(newValue);
  }
}
