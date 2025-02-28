import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  openMenus: { [key: string]: boolean } = {};

  toggleMenu(menu: string): void {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  isMenuOpen(menu: string): boolean {
    return this.openMenus[menu] || false;
  }

}
