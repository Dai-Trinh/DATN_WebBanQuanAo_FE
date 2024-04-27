import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "src/pages/admin/category/category.component";
import { AddProductComponent } from "src/pages/admin/product-management/add-product/add-product.component";
import { ProductManagementComponent } from "src/pages/admin/product-management/product-management.component";

const routes : Routes = [
    {path: "product-management", component: ProductManagementComponent},
    {path: "add-product", component: AddProductComponent},
    {path: "category", component: CategoryComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}