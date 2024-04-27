import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DATNAtinoNgZorroAntdModule } from './ng-zorro-antd.module';
import { MenuComponent } from 'src/pages/admin/components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/pages/admin/components/header/header.component';
import { ProductManagementComponent } from 'src/pages/admin/product-management/product-management.component';
import { AppRoutingModule } from './app-routing.modules';
import { AddProductComponent } from 'src/pages/admin/product-management/add-product/add-product.component';
import { CategoryComponent } from 'src/pages/admin/category/category.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ProductManagementComponent,
    AddProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    DATNAtinoNgZorroAntdModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DATNAtinoNgZorroAntdModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
