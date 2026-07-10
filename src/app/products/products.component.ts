import { Product } from './../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductFilterComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category = '';

  constructor(
  private route: ActivatedRoute,
  private productService: ProductService,
  ) {

  this.route.queryParamMap.subscribe(params => {
    this.category = params.get('category') || '';
    this.applyFilter();
  });

  this.productService.getAll().subscribe(products => {
    this.products = products as Product[];
    this.applyFilter();
  });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter(p => p.category === this.category)
      : this.products;
  }
}