import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { createRegisterForm } from '../../forms/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formWithControls!: FormGroup;
  formFromExternal!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formWithControls = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    // this.builderRegisterForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    // });

    this.formFromExternal = createRegisterForm(this.fb);
  }

  onSubmit() {
    console.log('Manual Form:', this.formWithControls.value);
  }

  onExternalSubmit() {
    console.log('External Form:', this.formFromExternal.value);
  }
}
