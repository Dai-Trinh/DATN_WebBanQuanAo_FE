import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent {
  @Input() isScroll = false;

  closeMenu = false;

  openMenu(): void {
    this.closeMenu = !this.closeMenu;
  }

}
