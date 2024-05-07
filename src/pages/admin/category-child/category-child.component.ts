import { Component } from '@angular/core';
import { BaseService } from 'src/service/base.service';

@Component({
  selector: 'app-category-child',
  templateUrl: './category-child.component.html',
  styleUrls: ['./category-child.component.scss']
})
export class CategoryChildComponent {

  constructor(
    private __baseService: BaseService) { }

  dataItem: any[] = [];
  dataItemParent: any[] = [];
  toltal: Number = 0;

  inputCategoryName: string = '';
  inputCategoryNameUpdate: string = '';
  filterCateName: string = '';
  filterCommon: string = '';
  selectedValueNew: string = '';

  idUpdate: number = 0;
  idDelete: number = 0;

  selectedValueUpdate: number = 0;

  messageDelete: string = '';
  isVisiableDelete: boolean = false;

  placement: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' = 'bottomLeft';

  isSpringing = true;

  async onHandleFetchParent() {
    let dataRequest = {
      pageNumber: 0,
      pageSize: 0,
      filter: {
        categoryName: this.filterCateName,
      },
      common: this.filterCommon,
      sortProperty: "updatedAt",
      sortOrder: "DESC"
    }

    let res = await this.__baseService.postData('api/category/parent', dataRequest);
    if(res?.result?.responseCode === '00'){
      this.dataItemParent = res?.data.map((item: any) => ({
        ...item,
        createdTimestamp: item?.updatedAt
          ? new Date(item?.updatedAt * 1000)
          : '',
      }));
      console.log('parent:', this.dataItemParent)
      if(this.dataItemParent.length > 0){
        this.selectedValueNew = this.dataItemParent[0]?.id;
      }
    }

    
  };

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
    this.onHandleFetchListUser();
    this.onHandleFetchParent();
  }


  visiableUpdate = false;
  visiable = false

  openModalAddCategory() {
    this.visiable = true;
  }

  openModalUpdateCate(cateName: any, id: any, idParent: any) {
    this.inputCategoryNameUpdate = cateName;
    this.idUpdate = id;
    this.selectedValueUpdate = idParent;
    console.log('selectedValueUpdate', this.selectedValueUpdate)
    this.visiableUpdate = true;

  }

  openModalDelete(id: any, categoryName: any){
    this.isVisiableDelete = true;
    this.idDelete = id;
    this.messageDelete = "Bạn có chắc muốn xóa danh mục sản phẩm có tên " + categoryName + "?";
  }

  handleCancel() {
    this.inputCategoryName = '';
    this.visiable = false;
    this.isVisiableDelete = false;
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
      updatedBy: 'admin',
      parentId: this.selectedValueNew
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
      updatedBy: 'admin',
      parentId: this.selectedValueUpdate
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

  handleDeleteCate() {
    this.isSpringing = true;
    this.deleteCate(this.idDelete);
    this.isVisiableDelete = false
  }

}
