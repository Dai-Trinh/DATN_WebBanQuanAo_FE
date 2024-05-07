import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DATNAtinoNgZorroAntdModule } from './ng-zorro-antd.module';
import { MenuComponent } from 'src/pages/admin/components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NZ_DATE_LOCALE, NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { enUS } from 'date-fns/locale';
import en from '@angular/common/locales/en'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/pages/admin/components/header/header.component';
import { ProductManagementComponent } from 'src/pages/admin/product-management/product-management.component';
import { AppRoutingModule } from './app-routing.modules';
import { AddProductComponent } from 'src/pages/admin/product-management/add-product/add-product.component';
import { CategoryComponent } from 'src/pages/admin/category/category.component';
import { AppAdminComponent } from 'src/pages/admin/app-admin/app-admin.component';
import { HeaderUserComponent } from 'src/pages/user/components/header-user/header-user.component';
import { HomeComponent } from 'src/pages/user/home/home.component';
import { MenuUserComponent } from 'src/pages/user/components/menu-user/menu-user.component';
import { CollectionComponent } from 'src/pages/user/collection/collection.component';
import { ProductComponent } from 'src/pages/user/product/product.component';
import { ProductDetailComponent } from 'src/pages/user/product-detail/product-detail.component';
import { CategoryChildComponent } from 'src/pages/admin/category-child/category-child.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ProductManagementComponent,
    AddProductComponent,
    CategoryComponent,
    AppAdminComponent,
    HeaderUserComponent,
    HomeComponent,
    MenuUserComponent,
    CollectionComponent,
    ProductComponent,
    ProductDetailComponent,
    CategoryChildComponent
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
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_DATE_LOCALE, useValue: enUS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }