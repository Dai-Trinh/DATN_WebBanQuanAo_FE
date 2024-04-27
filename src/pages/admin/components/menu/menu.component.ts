import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../../../../../node_modules/ng-zorro-antd/ng-zorro-antd.min.css']
})
export class MenuComponent {
  isCollapsed = false;

  toggleCollapsed() : void {
    this.isCollapsed = !this.isCollapsed;
  }

}
