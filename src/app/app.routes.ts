import { CanActivateFn, Router, Routes } from '@angular/router';
import { ProductList } from './features/product/pages/product-list/product-list';
import { ProductDetail } from './features/product/pages/product-detail/product-detail';
import { Cart } from './features/cart/cart';
import { AuthService } from './shared/services/auth';
import { inject } from '@angular/core';

const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isLogged() ? true : router.parseUrl('/products');
}

export const routes: Routes = [
    { path: 'products', component: ProductList },
    { path: 'products/:id', component: ProductDetail },
    { path: 'cart', component: Cart, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'products' }
];
