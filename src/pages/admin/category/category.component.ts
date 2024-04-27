import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  visiable = false

  openModalAddCategory() {
    this.visiable = true;
  }

  handleCancel() {
    this.visiable = false;
  }

}
