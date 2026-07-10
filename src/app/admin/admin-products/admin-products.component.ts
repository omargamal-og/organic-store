import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
  CommonModule,
  RouterLink,
  TableModule,
  InputTextModule,
  ButtonModule
],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent { 
  products: Product[] = [];
  // filteredProducts: any[] = [];
  // subsciption: Subscription;

  // constructor(private productService: ProductService) {
  // this.subsciption = this.productService.getAll()
  // .subscribe(products => {
  //   this.filteredProducts =  this.products = products as any[];
  // });
  // }

  constructor(private productService: ProductService) {
  this.productService.getAll().subscribe((products: any[]) => {
    this.products = products;
  });
  }

  // filter(query: string) {
  //   this.filteredProducts = (query) ?
  //     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
  //     this.products;   
  // }

  // ngOnDestroy(): void {
  //     this.subsciption.unsubscribe();
  // }

}
