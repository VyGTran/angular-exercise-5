import { Component } from '@angular/core';
import { BobComponent } from './bob/bob.component';
import { SusanComponent } from './susan/susan.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BobComponent, SusanComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
