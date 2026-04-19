import { Component } from '@angular/core';
import { StmHeaderComponent } from '../stm-header/stm-header.component';

import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../loader/loader.component';
@Component({
  selector: 'app-student-topmost-base',
  imports: [StmHeaderComponent,RouterOutlet,LoaderComponent],
  templateUrl: './student-topmost-base.component.html',
  styleUrl: './student-topmost-base.component.scss'
})
export class StudentTopmostBaseComponent {

}
