import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../loader/loader.component';
@Component({
  selector: 'app-college-base',
  imports: [HeaderComponent,FooterComponent,RouterOutlet,LoaderComponent],
  templateUrl: './college-base.component.html',
  styleUrl: './college-base.component.scss'
})
export class CollegeBaseComponent {

}
