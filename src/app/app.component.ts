import { Component } from '@angular/core';
import { HeaderSection } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name = 'Club de Software EPN';

  public sections: HeaderSection[] = [
    {
      title: 'Inicio',
      path: '/',
    },
    {
      title: 'Eventos',
      path: '/events',
    },
    {
      title: 'Contacto',
      path: '/contact',
    },
    {
      title: 'Sobre nosotros',
      path: '/about',
    },
  ];

  public onClick(event: Event): void {
    event.preventDefault();
    alert('Hola mundo');
  }
}
