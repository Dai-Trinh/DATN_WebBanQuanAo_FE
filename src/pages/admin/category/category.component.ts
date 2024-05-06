
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/service/base.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private __baseService: BaseService) { }

  dataItem: any[] = [];
  toltal: Number = 0;

  inputCategoryName: string = '';
  inputCategoryNameUpdate: string = '';
  filterCateName: string = '';
  filterCommon: string = '';

  idUpdate: number = 0;

  isSpringing = true;

  async onHandleFetchListUser() {
    let dataRequest = {
      pageNumber: 0,
      pageSize: 10,
      filter: {
        categoryName: this.filterCateName,
      },
      common: this.filterCommon,
      sortProperty: "updatedAt",
      sortOrder: "DESC"
    }

    let res = await this.__baseService.postData('api/category', dataRequest);
    if(res?.result?.responseCode === '00'){
      this.dataItem = res?.data.map((item: any) => ({
        ...item,
        createdTimestamp: item?.updatedAt
          ? new Date(item?.updatedAt * 1000)
          : '',
      }));
      console.log(JSON.stringify(this.dataItem))
      this.toltal = res.dataCount;
      this.isSpringing = false;
    }

    
  };

  ngOnInit(): void {
    this.isSpringing = true;
    this.onHandleFetchListUser()
  }


  visiableUpdate = false;
  visiable = false

  openModalAddCategory() {
    this.visiable = true;
  }

  openModalUpdateCate(cateName: any, id: any) {
    this.inputCategoryNameUpdate = cateName;
    this.idUpdate = id;
    this.visiableUpdate = true;

  }

  handleCancel() {
    this.inputCategoryName = '';
    this.visiable = false;
  }

  handleCancelUpdate() {
    this.inputCategoryNameUpdate = '';
    this.idUpdate = 0;
    this.visiableUpdate = false;
  }

  async saveCategory() {
    let dataSave = {
      categoryName: this.inputCategoryName,
      createdBy: 'admin',
      updatedBy: 'admin'
    }
    let res = await this.__baseService.postData('api/category/save', dataSave)
    this.onHandleFetchListUser();
    this.inputCategoryName = '';
    console.log(res);
  }

  async updateCategory(id: any) {
    let dataUpdate = {
      id: this.idUpdate,
      categoryName: this.inputCategoryNameUpdate,
      createdBy: 'admin',
      updatedBy: 'admin'
    }
    let res = await this.__baseService.putData('api/category/update/' + id, dataUpdate)
    this.onHandleFetchListUser();
    this.inputCategoryNameUpdate = '';
    console.log(res);
  }

  handleSaveCate() {
    if (this.inputCategoryName !== '') {
      this.isSpringing = true;
      this.saveCategory();
      this.visiable = false;
    }

  }

  handleUpdateCate() {
    if (this.idUpdate > 0 && this.inputCategoryNameUpdate !== '') {
      this.visiableUpdate = false;
      this.isSpringing = true;
      this.updateCategory(this.idUpdate);
    }

  }

  async deleteCate(id: any) {
    let res = await this.__baseService.deleteData('api/category/delete/' + id);
    console.log(JSON.stringify(res))
    this.onHandleFetchListUser();
  }

  handleDeleteCate(id: any) {
    this.deleteCate(id);
  }

}
