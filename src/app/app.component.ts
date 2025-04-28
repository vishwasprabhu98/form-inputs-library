import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { RadioComponent } from './components/radio/radio.component';

@Component({
  selector: 'app-root',
  imports: [
    InputComponent,
    DropdownComponent,
    CheckboxComponent,
    DatepickerComponent,
    RadioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vishwas-custom-inputs';
  @Input() item: any;
  @Input() inputTypes: any;
  @Input() formGroup: any;
}
