import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}


@Component({
  selector: 'app-dyniamic-form',
  imports: [ReactiveFormsModule,CommonModule, MatFormFieldModule,MatInputModule],
  templateUrl: './dyniamic-form.component.html',
  styleUrl: './dyniamic-form.component.scss'
})
export class DyniamicFormComponent implements OnInit {
  private fb = inject(FormBuilder);

  form!: FormGroup;

  fields: FieldConfig[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number'
    }
  ];


  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    const controls: any = {};

    this.fields.forEach(field => {
      controls[field.name] = [
        '',
        field.required ? Validators.required : []
      ];
    });

    this.form = this.fb.group(controls);
  }

  submit() {
    console.log(this.form.value);
  }


}
