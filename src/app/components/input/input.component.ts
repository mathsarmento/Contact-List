import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() name: string = '';
  @Input() ngModelInput = '';
  @Output() ngModelInputEvent = new EventEmitter();
  @Input() mask: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() width: string = '240px';
  @Input() disabled: boolean = false;

  changeValue(newValue: any) {
    this.ngModelInput = newValue;
    this.ngModelInputEvent.emit(newValue);
  }
}
