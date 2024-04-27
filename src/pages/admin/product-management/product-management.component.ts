import { Component, OnInit } from '@angular/core';


interface ItemData {
  name: string,
  age: number,
  address: string
}

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit{

  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for(let i = 0; i < 100; i++){
      this.listOfData.push({
        name: 'Join ' + i,
        age: i,
        address: 'London ' + i 
      });
    }
  }


}
