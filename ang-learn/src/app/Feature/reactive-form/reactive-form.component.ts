import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-reactive-form',
  imports: [SharedModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
