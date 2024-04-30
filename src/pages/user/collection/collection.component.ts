import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  dataItem : number[] = [1,2,3,4,5,6,7,8,9,10];
  current : number = 1;

}
