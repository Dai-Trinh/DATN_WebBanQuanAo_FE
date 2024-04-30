import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAdminComponent } from "src/pages/admin/app-admin/app-admin.component";
import { CategoryComponent } from "src/pages/admin/category/category.component";
import { AddProductComponent } from "src/pages/admin/product-management/add-product/add-product.component";
import { ProductManagementComponent } from "src/pages/admin/product-management/product-management.component";
import { CollectionComponent } from "src/pages/user/collection/collection.component";
import { HomeComponent } from "src/pages/user/home/home.component";
import { ProductComponent } from "src/pages/user/product/product.component";

const routes : Routes = [
    {path: "product-management", component: ProductManagementComponent},
    {path: "add-product", component: AddProductComponent},
    {path: "category", component: CategoryComponent},
    {path: "admin", component: AppAdminComponent},
    {path: "home", component: HomeComponent},
    {path: "collection", component: CollectionComponent},
    {path: "product", component: ProductComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}