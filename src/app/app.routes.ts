import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/bob', component: BobComponent},
    {path: 'about/susan', component: SusanComponent},
];
