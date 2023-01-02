import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Maersk';
  testMaersk: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.testMaersk = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required]],
      sexo: ['', Validators.required],
    });
  }
  get f() {
    return this.testMaersk.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.testMaersk.invalid) {
      return;
    }

    alert('Mensaje Enviado !');
  }
}
