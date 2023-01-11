import { Component } from '@angular/core';
import { MENU, MenuItem } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems: MenuItem[] = MENU;
}
