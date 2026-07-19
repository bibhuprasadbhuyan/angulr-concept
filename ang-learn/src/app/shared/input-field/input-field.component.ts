import { Component, Input } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone:false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
 @Input() label: string = '';
  @Input() placeholder: string = '';
   @Input() type: 'text' | 'number' | 'email' = 'text';
  @Input({ required: true }) control!: FormControl;
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @Input() readonly: boolean = false;
}
