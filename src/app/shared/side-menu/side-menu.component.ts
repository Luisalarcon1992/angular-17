import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItem = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes(':'))

  constructor() {

  }

}
