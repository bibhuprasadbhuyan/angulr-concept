import { Component, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,

      useExisting: forwardRef(() => PhoneNumberComponent),

      multi: true,
    },
  ],
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements ControlValueAccessor {
  countryCode = '+91';

  phone = '';

  disabled = false;

  // Angular gives these functions

  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(value: any) {
    if (value) {
      this.phone = value.replace(this.countryCode, '');
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  updatePhone(event: any) {
    this.phone = event.target.value;

    const fullNumber = this.countryCode + this.phone;

    // send value to FormControl

    this.onChange(fullNumber);

    this.onTouched();
  }
}
