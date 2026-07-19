import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberComponent } from './Components/phone-number/phone-number.component';

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    InputFieldComponent,
    PhoneNumberComponent
  ],
  exports: [
    HeaderComponent,
    InputFieldComponent,
    MaterialModule,
    PhoneNumberComponent
  ]
})
export class SharedModule { }
