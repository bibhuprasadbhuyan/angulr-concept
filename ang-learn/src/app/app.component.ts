import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormComponent } from "./Feature/reactive-form/reactive-form.component";
import { DyniamicFormComponent } from './Feature/dyniamic-form/dyniamic-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, ReactiveFormComponent, DyniamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang-learn';
}
