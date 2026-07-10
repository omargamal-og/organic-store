import { authGuard } from './auth.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { adminGuard } from './admin-auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'login', component: LoginComponent },

    { path: 'check-out', component: CheckOutComponent, canActivate: [authGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [authGuard] },
    { path: 'my/orders', component: MyOrdersComponent, canActivate: [authGuard] },

    { 
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [authGuard, adminGuard]
    },
    { 
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [authGuard, adminGuard]
    },
    { 
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [authGuard, adminGuard]
    },
    { 
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [authGuard, adminGuard]
    }
];
